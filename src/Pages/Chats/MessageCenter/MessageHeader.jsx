import { useContext, useState } from "react";
import { ChatContext } from "../ChatContext";


export default function MessageHeader() {
  const { friend, setFilterMessage } = useContext(ChatContext);
  const [show, setShow] = useState(false);

  return (
    <div className="container-2-top">
      <div className="top-2-child">
        <img src={friend.image} alt="" />
        <span className="text">{friend.name}</span>
      </div>
      <div className="top-2-child">
        {show ? (
          <input
            className="Input-field"
            onKeyDown={(event) => setFilterMessage(event.target.value)}
          />
        ) : (
          <></>
        )}
        <img
          src="/chat-Images/search.svg"
          alt=""
          onClick={() => setShow(!show)}
        />
        <img className="dot" src="/chat-Images/dot.svg" alt="" />
      </div>
    </div>
  );
}
