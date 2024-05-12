import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../API/auth_api';
import { Link } from 'react-router-dom';
import {useAppState} from '../../utils/appState';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setUser} = useAppState();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(email, password);
    
      if (response.token) {
        if (response?.user) {
          setUser(response?.user);
        }
        navigate('/dashboard');
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center py-2">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 p-8 border border-black">
          <label>Email</label>
          <input
            className='border border-black'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            className='border border-black'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="border border-black p-2 bg-custom-blue"
          >
            Login
          </button>
        </div>
        <div>
          <p>Not registered? <Link to="/signup">Register</Link></p>
        </div>
      </form>
    </div>
  );
}
