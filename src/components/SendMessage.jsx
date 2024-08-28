import React from 'react';

export const SendMessage = ({ currentMessage, setCurrentMessage, setMessageList, MessageList }) => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (currentMessage !== "") {
      const messageData = {
        message: currentMessage,
        time: new Date().toLocaleTimeString(),
      };
      setMessageList([...MessageList, messageData]); // Add the message to the MessageList
      setCurrentMessage(""); // Clear the input after sending the message
    }
  };

  return (
    <div className='bg-green-300 fixed bottom-0 w-full py-10 shadow-lg'>
      <form onSubmit={handleSendMessage} className='containerWrap flex'>
        <input
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          className='input w-full focus:outline-none bg-gray-100 rounded-r-none'
          type='text'
        />
        <button type='submit' className='w-auto bg-gray-500 text-white rounded-r-lg px-5 text-sm'>
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
