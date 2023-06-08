import { useContext } from "react";
import { ChatContext } from "../ChatContext";

export default function FriendComponent({ friend }) {
  const { setFriend } = useContext(ChatContext);
  const friendClassName = friend.active ? "juliet" : "text";
  return (
    <div className="friend-main" onClick={() => setFriend(friend.id)}>
      <div className="friend-list">
        <img src={friend.image} alt="" />
        <div className="friend-name">
          <span className={friendClassName}>{friend.name}</span>
          <span className="text">{friend.text}</span>
        </div>
      </div>
      <div className="time">
        { friend.unread > 0 ? <span className="two">{friend.unread}</span> : <></>}
        <span className="text">{friend.time}</span>
      </div>
    </div>
  );
}
