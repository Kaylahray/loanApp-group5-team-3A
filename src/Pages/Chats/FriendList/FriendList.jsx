import React, { useState } from 'react'
import FriendComponent from './Friend';

export default function FriendList({ setFriend, friends }) {
  const [filter, setFilter] = useState("");
    const friendsArray = [];
    for(let i = 0; i < friends.length; i++) {
      if(friends[i].name.toLowerCase().includes(filter.toLowerCase()))
        friendsArray.push(<FriendComponent key={i} friend={friends[i]} setFriend={setFriend} />);
    }
  return (
    <div className="child-container-1">
      <div className="search-area">
        <h3>chat</h3>
        <input className='Input-field' type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      { friendsArray }
    </div>
  );
}
