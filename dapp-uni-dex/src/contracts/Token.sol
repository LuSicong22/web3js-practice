// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "openzeppelin-solidity/contracts/utils/math/SafeMath.sol";

contract Token {
    using SafeMath for uint256;

    string public name = "SiLU Token";
    string public symbol = "SiLU";
    uint256 public decimal = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor() public {
        totalSupply = 1000000 * (10**decimal);
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(address _to, uint256 _value)
        public
        returns (bool success)
    {
        balanceOf[msg.sender] = balanceOf[msg.sender].sub(_value);
        balanceOf[_to] = balanceOf[_to].add(_value);
        return true;
    }
}
