import { useState } from "react";

export default function MessageCenterHeader({ name, image, onFilterMessage }) {
    const [ show, setShow ] = useState(false);

    return (
      <div className="container-2-top">
        <div className="top-2-child">
          <img src={image} alt="" />
          <span className="text">{name}</span>
        </div>
        <div className="top-2-child">
          {show ? <input onKeyDown={(event) => onFilterMessage(event.target.value)} /> : <></>}
          <img src="/images/search.svg" alt="" onClick={() => setShow(!show)} />
          <img className="dot" src="/images/dot.svg" alt="" />
        </div>
      </div>
    );
}