// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Holder.sol";

contract testMapping is  ERC1155Holder {
    IERC1155 public nftToken;

    struct Staker {
        uint256 tokenId;
        uint16 amount;
        uint256 stakedAt;
        bool isStaked;
        }

    Staker[] public stakers;
    
    function addData(uint256 _tokenId, uint16 _amount) external {
        // nftToken.safeTransferFrom(msg.sender, address(this), _tokenId, _amount, "0x");
        stakers.push(Staker(
        _tokenId,
        _amount,
        block.timestamp,
        true
        ));
    }

    function delData(uint256 _index) external {
        stakers[_index].stakedAt = 0;
        stakers[_index].isStaked = false;
    }  
}