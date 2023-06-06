import React from 'react'
import FriendComponent from './Friend';

export default function FriendList() {
  return (
    <div className="child-container-1">
      <div className="search-area">
        <h3>chat</h3>
        <input type="text" />
      </div>

      <FriendComponent notification={2} active={true}/>
      <FriendComponent notification={0} />
      <FriendComponent notification={0} active={false}/>
      <FriendComponent notification={0} />
      <FriendComponent notification={0} />
      <FriendComponent notification={0} />
    </div>
  );
}
