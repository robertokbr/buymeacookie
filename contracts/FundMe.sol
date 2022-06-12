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

    function withdraw() public payable {
        for (uint256 i = 0; i < funders.length; i++) {
            addressToAmountFunded[funders[i]] = 0;
        }

        funders = new address[](0);

        (bool callSuccess,) = payable(msg.sender).call{ value: address(this).balance }("");
    
        require(callSuccess, "Transaction has failed");
    }
}