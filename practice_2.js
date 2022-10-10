// use Ganache local url
const Web3 = require("web3");
const rpcURL = "http://127.0.0.1:7545";
const web3 = new Web3(rpcURL);

// TODO: Get latest block number
// web3.eth.getBlockNumber().then(console.log);

// TODO: Make a transaction
const account1 = "0x2f2C22ADAB83FB44d378D4a9e9ff2e0675382623";
const account2 = "0x6d3A587C630B6f1e45feF29f64E1e817627347c5";

web3.eth.sendTransaction(
  {
    from: account1,
    to: account2,
    value: web3.utils.toWei("1", "ether"),
  },
  (err, result) => {
    console.log(result);
  }
);
