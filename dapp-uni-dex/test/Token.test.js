import tokens from "./helper";

const Token = artifacts.require("./Token");

require("chai").use(require("chai-as-promised")).should();

contract("Token", ([deployer, receiver]) => {
  const name = "SiLU Token";
  const symbol = "SiLU";
  const decimal = "18";
  const totalSupply = tokens(1000000).toString();
  let token;

  beforeEach(async () => {
    token = await Token.new();
  });

  describe("deployment", () => {
    it("track the name", async () => {
      const result = await token.name();
      result.should.equal(name);
    });

    it("track the symbol", async () => {
      const result = await token.symbol();
      result.should.equal(symbol);
    });

    it("track the decimals", async () => {
      const result = await token.decimal();
      result.toString().should.equal(decimal);
    });

    it("track the total supply", async () => {
      const result = await token.totalSupply();
      result.toString().should.equal(totalSupply);
    });

    it("assigns the total supply to the deployer", async () => {
      const result = await token.balanceOf(deployer);
      result.toString().should.equal(totalSupply);
    });
  });

  describe("sending tokens", () => {
    it("transfers token balances", async () => {
      let balanceOf;
      balanceOf = await token.balanceOf(deployer);
      console.log("deployer balance before transfer", balanceOf.toString());
      balanceOf = await token.balanceOf(receiver);
      console.log("receiver balance before transfer", balanceOf.toString());

      // Transfer
      await token.transfer(receiver, tokens(1000000), {
        from: deployer,
      });

      // After transfer
      balanceOf = await token.balanceOf(deployer);
      balanceOf.toString().should.equal(tokens(99990));
      console.log("deployer balance after transfer", balanceOf.toString());
      balanceOf = await token.balanceOf(receiver);
      balanceOf.toStirng;
      console.log("receiver balance after transfer", balanceOf.toString());
    });
  });
});
