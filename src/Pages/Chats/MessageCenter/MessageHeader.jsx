import { useState } from "react";

export default function MessageHeader({ friend, onFilterMessage }) {
  const [show, setShow] = useState(false);

  return (
    <div className="container-2-top">
      <div className="top-2-child">
        <img src={friend.image} alt="" />
        <span className="text">{friend.name}</span>
      </div>
      <div className="top-2-child">
        {show ? (
          <input onKeyDown={(event) => onFilterMessage(event.target.value)} />
        ) : (
          <></>
        )}
        <img src="/images/search.svg" alt="" onClick={() => setShow(!show)} />
        <img className="dot" src="/images/dot.svg" alt="" />
      </div>
    </div>
  );
}
