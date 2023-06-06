import React, { useState } from 'react'
import { useContext } from 'react';
import { ChatContext } from '../ChatContext';
import FriendComponent from './Friend';


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
        <input
          className="Input-field"
          type="text"
          onChange={(e) => setFilterFriends(e.target.value)}
        />
      </div>
      {friendsArray}
    </div>
  );
}
