import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Messages = () => {
  const { user } = useAuth();
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState('');
  const [chats] = useState([
    {
      id: 1,
      name: 'John Smith',
      role: 'Teacher',
      lastMessage: 'Please check the homework assignment',
      timestamp: '10:30 AM',
      unread: 2,
    },
    {
      id: 2,
      name: 'Admin Office',
      role: 'Admin',
      lastMessage: 'School will be closed tomorrow',
      timestamp: 'Yesterday',
      unread: 0,
    },
  ]);

  const [messages] = useState({
    1: [
      { id: 1, sender: 'John Smith', text: 'Hello, how are you?', timestamp: '10:25 AM' },
      { id: 2, sender: 'You', text: 'I am good, thank you!', timestamp: '10:26 AM' },
      { id: 3, sender: 'John Smith', text: 'Please check the homework assignment', timestamp: '10:30 AM' },
    ],
    2: [
      { id: 1, sender: 'Admin Office', text: 'School will be closed tomorrow', timestamp: 'Yesterday' },
    ],
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // In a real application, this would send to a backend
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Chat List */}
      <div className="w-1/3 border-r border-gray-200 dark:border-gray-700">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">Messages</h2>
        </div>
        <div className="overflow-y-auto h-[calc(100%-4rem)]">
          {chats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`w-full p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 ${
                selectedChat === chat.id ? 'bg-gray-50 dark:bg-gray-800' : ''
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white">{chat.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{chat.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 dark:text-gray-400">{chat.timestamp}</p>
                  {chat.unread > 0 && (
                    <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-blue-600 rounded-full">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 truncate">
                {chat.lastMessage}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                {chats.find(chat => chat.id === selectedChat)?.name}
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages[selectedChat]?.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      msg.sender === 'You'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p className="text-xs mt-1 opacity-75">{msg.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 input-field"
                />
                <button type="submit" className="btn-primary">
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages; 