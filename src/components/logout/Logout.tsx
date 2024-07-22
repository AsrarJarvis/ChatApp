import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    console.log('User logged out');
    navigate('/login')
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Logout</h2>
        <button onClick={handleLogout} className="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
