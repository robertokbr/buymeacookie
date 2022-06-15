import { FundMe } from "../typechain-types";
const { assert } = require("chai");
const { ethers } = require("hardhat");

describe("FundMe", function () {
  let fundMe: FundMe;

  beforeEach(async function () {
    const ContractFactory = await ethers.getContractFactory("FundMe");
    const contract = await ContractFactory.deploy();
    fundMe = contract;
  });

  it('should be defined', async () => {
    const owner = await fundMe.i_owner();
    assert.equal(owner, process.env.WALLET_ADDRESS);
  });
});
