import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChatIcon } from '@heroicons/react/solid';
import MessageComponent from '../message/MessageComponent';

interface Message {
  text: string;
  username: string;
  timestamp: string;
  userImage: string
}

const Home: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get('username') || 'User';

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() !== '') {
      const newMessage: Message = {
        text: message,
        username: username,
        timestamp: new Date().toLocaleTimeString(),
         userImage: ''
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };


  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 p-4 items-center">
      <h1 className="text-3xl font-bold mb-4">Hello, {username}!</h1>
      <p className="w-full max-w-md mb-4 text-left text-gray-300">
        How are you doing today? Would you like to share something with the community🤗
      </p>
      
      <div className="w-full max-w-md bg-gray-800 mb-2 p-6 rounded-lg shadow-lg flex flex-col space-y-4 mx-auto">
        <h5> Create post</h5>
        <form onSubmit={handleSendMessage} className="flex flex-col space-y-2">
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message"
              className="w-full px-10 py-2 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <ChatIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </form>
      </div>
      
      <MessageComponent messages={messages} />
    </div>
  );
};

export default Home;
