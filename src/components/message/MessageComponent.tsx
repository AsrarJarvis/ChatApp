import React from 'react';

interface Message {
  text: string;
  username: string;
  timestamp: string;
  userImage: string;
}

interface MessageComponentProps {
  messages: Message[];
}

const MessageComponent: React.FC<MessageComponentProps> = ({ messages }) => {
  return (
    <div className="w-full max-w-md flex flex-col space-y-4 mb-4 overflow-y-auto mx-auto">
      {messages.map((msg, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col space-y-2">
          <div className="flex items-start space-x-4 mb-4">
            <img
              src={msg.userImage || `/img3.jpg`} 
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <div className="w-full">
              <div className="items-center space-x-2 ">
                <div className="text-gray-200 font-semibold ml-2">{msg.username}</div>
                <div className="text-gray-400 text-sm ">{msg.timestamp}</div>
              </div>
            </div>
          </div>
          <div className="relative flex-1 bg-gray-700 p-4 rounded-md text-gray-200">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl">😊</span>
                <span className="pl-12">{msg.text}</span> {/* Added padding to ensure space for the emoji */}
              </div>
        </div>
      ))}
    </div>
  );
};

export default MessageComponent;
