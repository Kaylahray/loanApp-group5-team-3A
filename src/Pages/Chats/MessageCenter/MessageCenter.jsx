import { useState } from "react";
import MessageBody from "./MessageBody";
import MessageCenterFooter from "./MessageCenterFooter";
import MessageCenterHeader from "./MessageCenterHeader";

export default function MessageCenter() {
  const [allMessages, setAllMessages] = useState([]);

  const onHandleFiltering = (value) => {
    console.log("Filtered Message from " + value);
  }
  const onHandleMessageSending = (value, type) => {
    console.log("About to send ", value, type);
    setAllMessages([
      { content: value, type },
      { content: value, type, isSent: true },
      ...allMessages,
    ]);
  }

  return (
    <div className="child-container-2">
      <MessageCenterHeader
        name="Nony"
        image="/images/person.svg"
        onFilterMessage={onHandleFiltering}
      />

      <MessageBody messages={allMessages}/>

      <MessageCenterFooter onSendMessage={onHandleMessageSending} />
    </div>
  );
}
