// SPDX-License-Identifier: MIT
pragma solidity ^0.7.3;

contract HelloWorld {
    string announcer;
    string public announcement;

    constructor(string memory _announcement) {
        announcement = _announcement;
        announcer = "The Admin";
    }

    function hello() public view returns (string memory) {
        return
            string(abi.encodePacked(announcer, " ", "says", " ", announcement));
    }

    function changeAnnouncer(string memory _announcer) public {
        announcer = _announcer;
    }
}
