import { Emoji, EmojiStyle } from 'emoji-picker-react';
export default function ReceivedMesssage({ message, type }) {
    return (
      <div className="received-msg">
        {type == "TEXT" ? <span className="text">{message} </span> : <></>}
        {type == "EMOJI" ? <Emoji unified={message} size="50" /> : <></>}
        {type == "IMAGE" ? <img className="image" src={message} /> : <></>}
      </div>
    );
}