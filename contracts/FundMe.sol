// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "./PriceConverter.sol";

error FundMe__NotOwner();

/** @title A contract for crowd funding
 *  @author Robertokbr
 *  @notice This contract is to demo a sample funding contract
 *  @dev This implements Chainlink Price feeds withing the PriceConverter lib
 */
contract FundMe {
  using PriceConverter for uint256;

  uint256 public constant MINIMUM_USD = 50 * 1e18;
  address[] public s_funders;
  mapping(address => uint256) public s_addressToAmountFunded;
  address public immutable i_owner;
  AggregatorV3Interface public s_priceFeed;

  modifier onlyOwner{
    if (msg.sender != i_owner) revert FundMe__NotOwner();
    _;
  }

  constructor(address priceFeedAddress) {
    i_owner = msg.sender;
    s_priceFeed = AggregatorV3Interface(priceFeedAddress);
  }

  receive() external payable {
    fund();
  }

  fallback() external payable {
    fund();
  }

  /**
   *  @notice This function funds this contract and create a realtion between sender and funds
   */
  function fund() public payable {
    require(msg.value.getConversionRate(s_priceFeed) >= MINIMUM_USD, "The minimum fund value is 50 USD");

    s_funders.push(msg.sender);
    s_addressToAmountFunded[msg.sender] += msg.value;
  }

  function withdraw() public onlyOwner payable {
    address[] memory funders = s_funders;

    for (uint256 i = 0; i < funders.length; i++) {
        s_addressToAmountFunded[funders[i]] = 0;
    }

    s_funders = new address[](0);

    (bool callSuccess,) = payable(msg.sender).call{ value: address(this).balance }("");

    require(callSuccess, "Call has failed");
  }
}
