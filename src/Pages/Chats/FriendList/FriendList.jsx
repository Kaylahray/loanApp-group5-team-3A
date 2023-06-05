import React, { useState } from 'react'
import FriendComponent from './Friend';

export default function FriendList({ setFriend }) {
  const [filter, setFilter] = useState("");
  const [friends, setFriends] = useState([
    {
      id: 1,
      name: "Juliet One",
      text: "nice",
      time: "12:09",
      active: true,
      unread: 2,
      image: "https://i.pravatar.cc/300",
      messages: []
    },
    {
      id: 2,
      name: "Juliet Two",
      text: "nice",
      time: "12:09",
      unread: 0,
      image: "https://i.pravatar.cc/200",
      messages: []
    },
    {
      id: 3,
      name: "Juliet Three",
      text: "nice",
      time: "12:09",
      unread: 20,
      image: "https://i.pravatar.cc/250",
      messages: []
    },
    {
      id: 4,
      name: "Juliet Four",
      text: "nice",
      time: "12:09",
      image: "https://i.pravatar.cc/350",
      messages: []
    },
  ]);
    const friendsArray = [];
    for(let i = 0; i < friends.length; i++) {
      if(friends[i].name.toLowerCase().includes(filter.toLowerCase()))
        friendsArray.push(<FriendComponent key={i} friend={friends[i]} setFriend={setFriend} />);
    }
  return (
    <div className="child-container-1">
      <div className="search-area">
        <h3>chat</h3>
        <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      { friendsArray }
    </div>
  );
}
