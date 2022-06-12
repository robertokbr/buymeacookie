// SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "./PriceConverter.sol";

contract FundMe {
    using PriceConverter for uint256;

    uint256 minimumUSD = 50 * 1e18;
    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;
    
    function fund() public payable {
        require(msg.value.getConversionRate() >= minimumUSD, "The minimum fund value is 50 USD");

        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] += msg.value;
    }
}