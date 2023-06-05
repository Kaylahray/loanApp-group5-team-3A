import ReceivedMesssage from "./ReceivedMessage";
import SentMessage from "./SentMessage";

export default function MessageBody({ messages, filter }) {
    const messageArray = [];
    for(let i = 0; i < messages.length; i++) {
        const message = messages[i];
        if(filter && (message.type != "TEXT" || !message.content.toLowerCase().includes(filter))) continue;
        if(message.isSent) {
            messageArray.push(<SentMessage key={i} type={message.type} message={message.content} />);
        } else {
            messageArray.push(<ReceivedMesssage key={i} type={message.type} message={message.content} />);
        }
    }
 
    return (
      <div className="message">
        { messageArray }
      </div>
    );
}