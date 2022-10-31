import "./App.css";
import { useEffect } from "react";
import Web3 from "web3";
import Token from "../abis/Token.json";

function App() {
  useEffect(() => {
    loadBlockchainData();
  }, []);

  async function loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "HTTP://127.0.0.1:7545");
    console.log(web3);
    const network = await web3.eth.net.getNetworkType();
    const networkId = await web3.eth.net.getId();
    console.log(networkId);
    const accounts = await web3.eth.getAccounts();
    console.log(Token);
    const token = web3.eth.Contract(
      Token.abi,
      Token.networks[networkId].address
    );
    const totalSupply = await token.methods.totalSupply().call();
    console.log("totalSupply", totalSupply);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Navbar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link 2
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <div className="vertical-split">
          <div className="card bg-dark text-white">
            <div className="card-header">Card Tittle</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card's content. title
                and make up the bulk of the card's content.
              </p>
              <a href="#" className="card-link">
                Card Link
              </a>
            </div>
          </div>
          <div className="card bg-dark text-white">
            <div className="card-header">Card Tittle</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card's content. title
                and make up the bulk of the card's content.
              </p>
              <a href="#" className="card-link">
                Card Link
              </a>
            </div>
          </div>
        </div>
        <div className="vertical">
          <div className="card bg-dark text-white">
            <div className="card-header">Card Tittle</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card's content. title
                and make up the bulk of the card's content.
              </p>
              <a href="#" className="card-link">
                Card Link
              </a>
            </div>
          </div>
        </div>
        <div className="vertical-split">
          <div className="card bg-dark text-white">
            <div className="card-header">Card Tittle</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card's content. title
                and make up the bulk of the card's content.
              </p>
              <a href="#" className="card-link">
                Card Link
              </a>
            </div>
          </div>
          <div className="card bg-dark text-white">
            <div className="card-header">Card Tittle</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card's content. title
                and make up the bulk of the card's content.
              </p>
              <a href="#" className="card-link">
                Card Link
              </a>
            </div>
          </div>
        </div>
        <div className="vertical">
          <div className="card bg-dark text-white">
            <div className="card-header">Card Tittle</div>
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card's content. title
                and make up the bulk of the card's content.
              </p>
              <a href="#" className="card-link">
                Card Link
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 p-4 bg-primary text-white text-center">
        <p>2022@simon</p>
      </div>
    </div>
  );
}

export default App;
