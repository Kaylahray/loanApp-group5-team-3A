import FriendListComponent from "./FriendList/FriendList";
import MessageCenterComponent from "./MessageCenter/MessageCenter";
import "./Chats.scss";
import { useState } from "react";
import { useEffect } from "react";
import { ChatContext } from "./ChatContext";


const endpoint = "https://demo9085179.mockable.io/friends";

function Chats() {
  const [friendId, setFriendId] = useState();
  const [messageFilter, setFilterMessage] = useState("");
  const [friendFilter, setFilterFriends] = useState("");
  const [friends, setFriends] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then(data => data.json())
        .then(response => setFriends(response));
   }, []);

  if (friends == null) return <></>;

   // Sub-routines
  const friend = findFriend(friends, friendId);
  const currentFriends = findMatchingFriends(friends, friendFilter);
  const currentMessages = friend ? findMatchingMessages(friend.messages, messageFilter) : [];
  const sendMessage = (content, type) => {
    const selectedFriend = findFriend(friends, friendId);
    selectedFriend.messages.unshift({ content, type, isSent: true });
    selectedFriend.messages.unshift({ content, type });
    setFriends([...friends])
  }

 

  return (
    <ChatContext.Provider value={{ sendMessage, friend, setFriend: setFriendId, setFilterFriends, setFilterMessage, currentFriends, currentMessages  }}>
          <div className="main-container">
            <FriendListComponent />
            {friend ? (
              <MessageCenterComponent  />
            ) : (
              <div className="no-message">
                <h3 className="float">Pick a friend and chat a-thon.</h3>
              </div>
            )}
          </div>
    </ChatContext.Provider>

  );
}

function findFriend(friends, searchValue) {
  for(let friend of friends) {
    if (friend.id == searchValue) return friend;
  }
}

function findMatchingMessages(messages, searchValue) {
  const matchingMessages = [];
    for (let message of messages) {
      if (message.content.includes(searchValue)) matchingMessages.push(message);
    }
    return matchingMessages;
}

function findMatchingFriends(friends, searchValue) {
  const matchingFriends = [];
  for (let friend of friends) {
    if (friend.name.includes(searchValue)) matchingFriends.push(friend);
  }
  return matchingFriends;
}

export default Chats;
