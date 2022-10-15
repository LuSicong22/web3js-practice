import { tokens, EVM_REVERT } from "./helpers";

const Exchange = artifacts.require("./Exchange");

require("chai").use(require("chai-as-promised")).should();

contract("Exchange", ([deployer, feeAccount, user1]) => {
  let exchange;
  const feePercent = 10;

  beforeEach(async () => {
    exchange = await Exchange.new(feeAccount, feePercent);
  });

  describe("deployment", () => {
    it("track the feeAccount", async () => {
      const result = await exchange.feeAccount();
      result.should.equal(feeAccount);
    });

    it("tracks the fee percent", async () => {
      const result = await exchange.feePercent();
      result.toString().should.equal(feePercent.toString());
    });
  });
});
