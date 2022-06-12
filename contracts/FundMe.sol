// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "./PriceConverter.sol";

contract FundMe {
    using PriceConverter for uint256;

    uint256 minimumUSD = 50 * 1e18;
    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;
    address public i_owner;

    constructor() {
        i_owner = msg.sender;
    }

    modifier onlyOwner{
        require(msg.sender == i_owner);
        _;
    }

    function fund() public payable {
        require(msg.value.getConversionRate() >= minimumUSD, "The minimum fund value is 50 USD");

        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] += msg.value;
    }

    function withdraw() public onlyOwner payable {
        for (uint256 i = 0; i < funders.length; i++) {
            addressToAmountFunded[funders[i]] = 0;
        }

        funders = new address[](0);

        (bool callSuccess,) = payable(msg.sender).call{ value: address(this).balance }("");
    
        require(callSuccess, "Call has failed");
    }
}