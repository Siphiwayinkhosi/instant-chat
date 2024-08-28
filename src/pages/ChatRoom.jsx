import React, { useState } from 'react';
import ChatBox from '../pages/ChatBox';
import SendMessage from '../components/SendMessage';

export const ChatRoom = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [MessageList, setMessageList] = useState([]);

  return (
    <div>
      <ChatBox MessageList={MessageList} />
      <SendMessage
        currentMessage={currentMessage}
        setCurrentMessage={setCurrentMessage}
        setMessageList={setMessageList}
        MessageList={MessageList}
      />
    </div>
  );
};

export default ChatRoom;
