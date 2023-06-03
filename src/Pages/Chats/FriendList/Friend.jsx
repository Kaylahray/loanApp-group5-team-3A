export default function FriendComponent({ notification, active }) {
  const friendClassName = active ? "juliet" : "text";
  return (
    <div className="friend-main">
      <div className="friend-list">
        <img src="/images/person.svg" alt="" />
        <div className="friend-name">
          <span className={friendClassName}>juliet Frank</span>
          <span className="text">This is lovely</span>
        </div>
      </div>
      <div className="time">
        { notification > 0 ? <span className="two">{notification}</span> : <></>}
        <span className="text">12:01</span>
      </div>
    </div>
  );
}