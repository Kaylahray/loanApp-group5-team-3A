// eslint-disable-next-line react/prop-types
export default function MessageCenterFooter({ sendMessage }) {
  const onHandleInput = (event) => {
    if (event.key == "Enter") {
      sendMessage(event.target.value);
      event.target.value = "";
    }
  };
  return (
    <div className="bottom">
      <img src="/images/attachment.svg" alt="" />
      <img src="/images/emoji.svg" alt="" />
      <input
        className=" input placeholder text"
        type="text"
        placeholder="Type message"
        onKeyDown={onHandleInput}
      />
    </div>
  );
}
