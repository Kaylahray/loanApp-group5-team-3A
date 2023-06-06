import MessageBody from "./MessageBody";
import MessageFooter from "./MessageFooter";
import MessageHeader from "./MessageHeader";

export default function MessageCenter() {
  return (
    <div className="child-container-2">
      <MessageHeader />
      <MessageBody />
      <MessageFooter />
    </div>
  );
}
