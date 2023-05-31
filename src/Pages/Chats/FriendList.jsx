import FriendComponent from "./Friend";

export default function FriendListComponent({ setFriend }) {
    const listOfFriends = [
      {
        name: "Miriam",
        title: "Nice",
        lastChat: "12:45",
        picture: "https://i.pravatar.cc/300",
        unreadMessage: 5,
        messageHistory: [
          { content: "Hello", isSent: true },
          { content: "Hi", isSent: false },
        ],
      },
      {
        name: "Nony",
        title: "Nice",
        picture: "https://i.pravatar.cc/300",
        lastChat: "12:45",
        unreadMessage: 1,
        messageHistory: [],
      },
    ];

    return <div>
        {
            listOfFriends.map((friend, key) => <FriendComponent key={key} friend={friend} setFriend={setFriend} />)
        }
    </div>;
}