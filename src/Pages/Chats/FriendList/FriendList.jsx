import React, { useState } from 'react'
import { useContext } from 'react';
import { ChatContext } from '../ChatContext';
import FriendComponent from './Friend';
import {
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export default function FriendList() {
  const { currentFriends, setFilterFriends } = useContext(ChatContext);
    const friendsArray = [];
    for (let i = 0; i < currentFriends.length; i++) {
        friendsArray.push(
          <FriendComponent key={i} friend={currentFriends[i]} />
        );
    }
  return (
    <div className="child-container-1">
      <div className="search-area">
        <h3>chat</h3>
        <div className="chat-input-2">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <FiSearch color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search or Start a new Chat"
              onChange={(e) => setFilterFriends(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>
      {friendsArray}
    </div>
  );
}
