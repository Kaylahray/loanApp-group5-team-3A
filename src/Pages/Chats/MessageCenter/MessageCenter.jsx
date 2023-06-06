import { useState } from "react";
import MessageBody from "./MessageBody";
import MessageFooter from "./MessageFooter";
import MessageHeader from "./MessageHeader";

export default function MessageCenter({ friend }) {
  const [allMessages, setAllMessages] = useState(friend.messages);
  const [filter, setFilter] = useState("");

  const onHandleMessageSending = (value, type) => {
    setAllMessages([
      { content: value, type: type },
      { content: value, type, isSent: true },
      ...allMessages,
    ]);
  };

  return (
    <div className="child-container-2">
      <MessageHeader
        friend={friend}
        onFilterMessage={setFilter}
      />

      <MessageBody messages={allMessages} filter={filter} />

      <MessageFooter onSendMessage={onHandleMessageSending} />
    </div>
  );
}
