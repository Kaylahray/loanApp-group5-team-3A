import { useState } from "react";
import MessageCenterFooter from "./MessageCenterFooter";
import MessageCenterHeader from "./MessageCenterHeader";
import ReceivedMesssage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

export default function MessageCenter() {
  const [messages, setMessages] = useState([
    { message: "Hello", sentMessage: true },
    {
      message: "Hi, this is Chinonso. Please where can we meet to talk",
      sentMessage: false,
    },
    {
      message: "Hi, this is juliet. Please where can we meet to talk",
      sentMessage: true,
    },
  ]);

  const composeMessage = (newMessage) => {
    const sentMessage = { message: newMessage, sentMessage: false };
    const receivedMessage = { message: newMessage, sentMessage: true };
    setMessages([receivedMessage, sentMessage, ...messages]);
  };

  return (
    <div className="child-container-2">
      <MessageCenterHeader />
      <div className="message">
        {messages.map((item, key) =>
          item.sentMessage ? (
            <SentMessage key={key} message={item.message} />
          ) : (
            <ReceivedMesssage key={key} message={item.message} />
          )
        )}
      </div>
      <MessageCenterFooter sendMessage={composeMessage} />
    </div>
  );
}
