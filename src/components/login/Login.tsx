import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // we can  add login logic here
    console.log('Email:', email, 'Password:', password);

    // Redirecting to the home page with query parameters
    navigate(`/home?username=${encodeURIComponent(email)}`);
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-gray-800 rounded-lg shadow-md">
        <p className='text-center'>WELCOME BACK</p>
        <h2 className="text-2xl font-bold text-center">Log into your account </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email or Username</label>
            <input
              type="text"
              id="email"
              placeholder='Enter your email or Username'
              className="w-full px-4 py-2 mt-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">Password</label>
            <label htmlFor="forgot-password" className="absolute right-0 top-0 text-xs text-gray-300 cursor-pointer hover:text-white">Forgot password?</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-2 text-gray-500 hover:text-white"
              style={{top: 39}}
            >
              {showPassword ? (
                <EyeOffIcon className="h-5 w-5" />
              ) : (
                <EyeIcon className="h-5 w-5" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Login Now
          </button>
        </form>
        <p className="text-gray-100 text-xs mt-4">
          Not Registered yet? <span className="text-white text-base hover:bg-white-600 cursor-pointer" onClick={handleRegisterClick}>Register →</span>
        </p>
      </div>
    </div>
  );
};

export default Login;


