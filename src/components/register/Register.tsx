import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Add registration logic here
    console.log('Username:', username, 'Email:', email, 'Password:', password);
  };
  const handleLoginClick = () => {
    navigate('/login');
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-gray-800 rounded-lg shadow-md">
        <p className='text-center text-xs text-gray-200'>SIGN UP</p>
        <h2 className="text-2xl font-bold text-center">Create an account to continue</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              id="email"
              placeholder='Enter your email'
              className="w-full px-4 py-2 mt-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-200">Username</label>
            <input
              type="text"
              id="username"
              placeholder='Choose a preferred username'
              className="w-full px-4 py-2 mt-2 border border-gray-600 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="relative">
               <label htmlFor="password" className="block text-sm font-medium text-gray-200">Password</label>
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
                 className="absolute right-2 top-39px text-gray-500 hover:text-white-300"
                 style={{ top: '39px' }}
               >
                 {showPassword ? (
                   <EyeOffIcon className="h-5 w-5" />
                 ) : (
                   <EyeIcon className="h-5 w-5" />
                 )}
               </button>
             </div>
          <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-green-600">
            Continue
          </button>
        </form>
        <p
          className="text-gray-100 text-xs mt-4"
        >
          Already have an account? <span className="text-white text-base hover:bg-white-600 cursor-pointer" onClick={handleLoginClick}>Login →</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
