import FriendListComponent from "./FriendList/FriendList";
import MessageCenterComponent from "./MessageCenter/MessageCenter";
import "./Chats.scss"
import { useState } from "react";

const dummyData = [
  {
    id: 1,
    name: "Juliet One",
    text: "nice",
    time: "12:09",
    active: true,
    unread: 2,
    image: "/chat-Images/person.svg",
    messages: [],
  },
  {
    id: 2,
    name: "Juliet Two",
    text: "nice",
    time: "12:09",
    unread: 0,
    image: "/chat-Images/men.jpg",
    messages: [],
  },
  {
    id: 3,
    name: "Juliet Three",
    text: "nice",
    time: "12:09",
    unread: 20,
    image: "/chat-Images/gal.jpg",
    messages: [],
  },
  {
    id: 4,
    name: "Juliet Four",
    text: "nice",
    time: "12:09",
    image: "/chat-Images/smiley.jpeg",
    messages: [],
  },
];


 function Chats() {
  const [friend, setFriend] = useState(null);
  const [friends, setFriends] = useState(dummyData);
  return (
    <div className="main-container">
      <FriendListComponent setFriend={setFriend} friends={friends} />
      {friend ? <MessageCenterComponent friend={friend} /> : <h1>Select Friend to view chats</h1>}
    </div>
  );
}

export default Chats;
