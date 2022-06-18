import { FundMe, MockV3Aggregator } from "../../typechain-types";
import { assert, expect } from "chai";
import { ethers, deployments, getNamedAccounts } from "hardhat";

describe("FundMe", () => {
  let fundMe: FundMe;
  let mockV3Aggregator: MockV3Aggregator;
  let sender: string;

  beforeEach(async () => {
    const { deployer } = await getNamedAccounts();
    await deployments.fixture(["all"]);
    fundMe = await ethers.getContract("FundMe", deployer);
    mockV3Aggregator = await ethers.getContract("MockV3Aggregator", deployer);
    sender = deployer;
  });

  describe("constructor", () => {
    it("should deploy the contract with the aggragator addresses correctly", async() => {
      const response = await fundMe.getPriceFeed();
      assert.equal(response, mockV3Aggregator.address);
    });

    it("should definde the sender as contract owner", async() => {
      const response = await fundMe.getOwner();
      assert.equal(response, sender);
    });
  });

  describe("fund", async () => {
    it("should fail if you do not send enough ETH", async () => {
      await expect(fundMe.fund()).to.be.revertedWith(
        "The minimum fund value is 50 USD",
      );

    });

    it("should update the amount funded", async () => {
      const value = ethers.utils.parseEther("1");
      await fundMe.fund({ value });
      const response = await fundMe.getAddressToAmountFunded(sender);

      assert.equal(value.toString(), response.toString());
    });

    it("should update the founders array", async () => {
      const value = ethers.utils.parseEther("1");
      await fundMe.fund({ value });
      const response = await fundMe.getFunder(0);
      assert.equal(sender, response.toString());
    });
  });

  describe("withdraw", () => {
    beforeEach(async () => {
      const value = ethers.utils.parseEther("1");
      await fundMe.fund({ value });
    });

    it("should be able to withdraw the contract balance", async () => {
      const [senderBalance, contractBalance] = await Promise.all([
        fundMe.provider.getBalance(sender),
        fundMe.provider.getBalance(fundMe.address)
      ]);

      const txResponse = await fundMe.withdraw();
      const { gasUsed, effectiveGasPrice } = await txResponse.wait(1);

      const totalGasCost = gasUsed.mul(effectiveGasPrice);

      const [findalSenderBalance, finalContractBalance] = await Promise.all([
        fundMe.provider.getBalance(sender),
        fundMe.provider.getBalance(fundMe.address)
      ]);

      assert.equal(finalContractBalance.toString(), "0");
      assert.equal(
        contractBalance.add(senderBalance).toString(),
        findalSenderBalance.add(totalGasCost).toString(),
      );
    });

    it("should be able to reset the funders amount funded", async () => {
      const accounts = await ethers.getSigners();

      for (let i = 0; i < 6; i++) {
        const fundMeConnection = fundMe.connect(accounts[i]);
        await fundMeConnection.fund({ value: ethers.utils.parseEther("1") });
      }

      const [senderBalance, contractBalance] = await Promise.all([
        fundMe.provider.getBalance(sender),
        fundMe.provider.getBalance(fundMe.address)
      ]);

      const txResponse = await fundMe.withdraw();
      const { gasUsed, effectiveGasPrice } = await txResponse.wait(1);
      const totalGasCost = gasUsed.mul(effectiveGasPrice);

      const [finalSenderBalance, finalContractBalance] = await Promise.all([
        fundMe.provider.getBalance(sender),
        fundMe.provider.getBalance(fundMe.address)
      ]);

      await expect(fundMe.getFunder(0)).to.be.reverted;

      for (let i = 0; i < 6; i++) {
        assert.equal(
          (await fundMe.getAddressToAmountFunded(accounts[i].address)).toString(),
          "0"
        );
      }

      assert.equal(
        senderBalance.add(contractBalance).toString(),
        finalSenderBalance.add(totalGasCost).toString(),
      );
    });

    it("should only allow owners to withdraw", async () => {
      const accounts = await ethers.getSigners();
      const attackerAccount = accounts[1];

      const connection = fundMe.connect(attackerAccount);

      await expect(connection.withdraw()).to.be.revertedWith(
        "FundMe__NotOwner"
      );
    });
  });
});
