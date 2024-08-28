import React from 'react';

function ChatBox({ MessageList }) {
  return (
    <div className='Chat-window flex flex-col items-center justify-center h-screen'>
      <div className="Chat-header text-6xl font-bold transform rotate-45 animate-pulse-size">
        <p>Chatting</p>
      </div>
      <div className="Chat-body mt-4">
        {MessageList.map((messageContent, index) => (
          <div key={index} className="message">
            <span>{messageContent.time}: {messageContent.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatBox;
