import { useContext } from "react";
import { ChatContext } from "../ChatContext";
import ReceivedMesssage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

export default function MessageBody() {
    const { currentMessages } = useContext(ChatContext);
    const messageArray = [];
    for (let i = 0; i < currentMessages.length; i++) {
      const message = currentMessages[i];
      if (message.isSent) {
        messageArray.push(
          <SentMessage key={i} type={message.type} message={message.content} />
        );
      } else {
        messageArray.push(
          <ReceivedMesssage
            key={i}
            type={message.type}
            message={message.content}
          />
        );
      }
    }
 
    return (
      <div className="message">
        { messageArray }
      </div>
    );
}