import { useState } from "react";

export default function MessageCenterComponent({ friend }) {
    if (friend == null) return <></>;
    const [state, setState] = useState(friend.messageHistory);
    const [ newMessage, setNewMessage ] = useState("");
    const sendNewMessage = (event) => {
        if(event.key == "Enter") {
            setState([ { content: newMessage, isSent: true }, ...state]);
            setNewMessage("");
        }
    }

    return (
      <div className="message-center-container">
        <div className="header">
            <img className="avatar" src={friend.picture} /> <span>{friend.name}</span>
        </div>
        <div className="body">
          {
              state.map((message, key) => 
                <span key={key} className={message.isSent ? "sent-message" : "received-message"}>{message.content}</span>
              )
          }
        </div>
        <div className="footer">
            <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} onKeyDown={sendNewMessage} />
        </div>
      </div>
    );
}
