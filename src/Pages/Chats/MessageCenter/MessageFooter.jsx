import EmojiPicker from "emoji-picker-react";
import ReactFileReader from "react-file-reader";
import { useState, useContext } from "react";
import { ChatContext } from "../ChatContext";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

export default function MessageFooter() {
  const { sendMessage } = useContext(ChatContext);
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");

  const handleTextMessage = (event) => {
    if (event.key == "Enter") {
      sendMessage(message, "TEXT");
      setMessage("");
    }
  };
  const handleEmojiClick = (value) => {
    setShowEmoji(false);
    if (message == "") sendMessage(value.unified, "EMOJI");
    else setMessage(message + value.emoji);
  };
  const handleFiles = (files) => {
    sendMessage(files.base64, "IMAGE");
  };

  return (
    <div className="bottom">
      <ReactFileReader
        handleFiles={handleFiles}
        fileTypes={[".png"]}
        base64={true}
      >
        <img src="/chat-Images/attachment.svg" alt="" />
      </ReactFileReader>
      <img
        src="/chat-Images/emoji.svg"
        alt=""
        onClick={() => setShowEmoji(!showEmoji)}
      />
      {showEmoji ? <EmojiPicker onEmojiClick={handleEmojiClick} /> : <></>}

      <div className="chat-input-2">
        <InputGroup>
          <Input
            type="text"
            placeholder="Type message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={handleTextMessage}
          />
        </InputGroup>
      </div>
    </div>
  );
}
