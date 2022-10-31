//Contracts
const Token = artifacts.require("Token");
const Exchange = artifacts.require("Exchange");

module.exports = async function (callback) {
  try {
    console.log("script running...");
  } catch (error) {
    console.log(error);
  }
  callback();
};
