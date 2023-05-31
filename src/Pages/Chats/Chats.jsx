import FriendListComponent from "./FriendList";
import MessageCenterComponent from "./MessageCenter";
import "./Chats.scss"
import { useState } from "react";

const Chats = () => {
  const [ friend, setFriend ] = useState(null);

  return (
    <div className="chat-container">
      <FriendListComponent setFriend={setFriend} />
      <MessageCenterComponent friend={friend} />
    </div>
  );
};

export default Chats;
