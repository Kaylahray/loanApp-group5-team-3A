import FriendListComponent from "./FriendList/FriendList";
import MessageCenterComponent from "./MessageCenter/MessageCenter";
import "./Chats.scss"
import { useState } from "react";


 function Chats() {
   const [friend, setFriend] = useState(null);
  return (
    <div className="main-container">
      <FriendListComponent setFriend={setFriend}/>
      { friend ? <MessageCenterComponent friend={friend}/> : <></> }
    </div>
  );
}

export default Chats;
