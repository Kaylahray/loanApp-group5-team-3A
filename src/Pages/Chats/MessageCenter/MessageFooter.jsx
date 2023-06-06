import EmojiPicker from "emoji-picker-react";
import ReactFileReader from "react-file-reader";
import { useState } from "react";

export default function MessageFooter({ onSendMessage }) {
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");

  const handleTextMessage = (event) => {
    if (event.key == "Enter") {
      onSendMessage(message, "TEXT");
      setMessage("");
    }
  };
  const handleEmojiClick = (value) => {
    setShowEmoji(false);
    if (message == "") onSendMessage(value.unified, "EMOJI");
    else setMessage(message + value.emoji);
  };
  const handleFiles = (files) => {
    onSendMessage(files.base64, "IMAGE");
  };

  return (
    <div className="bottom">
      <ReactFileReader
        handleFiles={handleFiles}
        fileTypes={[".png"]}
        base64={true}
      >
        <img src="/images/attachment.svg" alt="" />
      </ReactFileReader>
      <img
        src="/images/emoji.svg"
        alt=""
        onClick={() => setShowEmoji(true)}
      />
      {showEmoji ? <EmojiPicker onEmojiClick={handleEmojiClick} /> : <></>}
      <input
        className="placeholder text"
        type="text"
        placeholder="Type message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={handleTextMessage}
      />
    </div>
  );
}
