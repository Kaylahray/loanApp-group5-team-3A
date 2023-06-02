import FriendListComponent from "./FriendList/FriendList";
import MessageCenterComponent from "./MessageCenter/MessageCenter";
import "./Chats.scss"
import { useState } from "react";


 function Chats() {
  return (
    <div className="main-container">
      <FriendListComponent />
      <MessageCenterComponent />
    </div>
  );
}

export default Chats;
