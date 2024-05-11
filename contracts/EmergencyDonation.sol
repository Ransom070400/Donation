// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "hardhat/console.sol";
contract EmergencyDonation {
    address private owner;
    uint public targetAmount = 10000; // 10,000 dollars
    uint public totalDonated;
    uint public numDonations;
    mapping (address => uint) public donations;

    constructor() {
        owner = msg.sender;
    }

    function donate(uint amount, string memory currency) public {
        require(amount > 0, "Invalid donation amount");
        totalDonated += amount;
        numDonations++;
        donations[msg.sender] += amount;
        emit DonationReceived(msg.sender, amount, currency);
    }

    function getDonationPercentage() public view returns (uint) {
        return (totalDonated * 100) / targetAmount;
    }

    event DonationReceived(address indexed donor, uint amount, string currency);
}