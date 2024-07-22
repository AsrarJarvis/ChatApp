import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogOut}
      className="fixed top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Logout
    </button>
  );
};

export default Header;
