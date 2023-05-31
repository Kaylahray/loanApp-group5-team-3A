export default function FriendComponent({ friend, setFriend }) {
  return (
    <div onClick={() => setFriend(friend)}>
      <img className="avatar" src={friend.picture} />
      <span>{friend.name}</span>
      <span>{friend.lastChat}</span>
    </div>
  );
}
