import { Emoji, EmojiStyle } from "emoji-picker-react";
export default function SentMessage({ message, type }) {
  return (
    <div className="sent-msg">
      {type == "TEXT" ? <span className="text">{message} </span> : <></>}
      {type == "EMOJI" ? <Emoji unified={message} size="50" emojiStyle={EmojiStyle.FACEBOOK} /> : <></>}
      {type == "IMAGE" ? <img className="image" src={message} /> : <></>}
    </div>
  );
}
