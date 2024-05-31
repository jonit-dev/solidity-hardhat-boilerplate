// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract SimpleStorage {
  uint256 public data;

  uint256 public firstValue;

  constructor(uint256 _firstValue) {
    firstValue = _firstValue;
  }

  function set(uint256 _data) public {
    data = _data;
  }

  function get() public view returns (uint256) {
    return data;
  }
}
