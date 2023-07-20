// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Umur {
    uint256 umur;

    function read() public view returns (uint256) {
        return umur;
    }

    function calculateAge(uint256 lahir) public{
        uint256 target = 2045;
        umur = target-lahir;
    }
}
