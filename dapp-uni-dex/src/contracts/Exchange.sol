// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "./Token.sol";

// TODO:
// [X] Set the fee account
// [] Deposit Ether
// [] Withdraw Ether
// [] Deposit tokens
// [] Withdraw tokens
// [] Check balances
// [] Make order
// [] Cancel order
// [] Fill order

contract Exchange {
    address public feeAccount;
    uint256 public feePercent;

    constructor(address _feeAccount, uint256 _feePercent) {
        feeAccount = _feeAccount;
        feePercent = _feePercent;
    }

    function depositToken(address _token, uint256 _amount) public {
        Token(_token).transferFrom(msg.sender, address(this), _amount);
    }
}
