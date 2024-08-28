import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/chatroom'); // Navigate to the ChatRoom page
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className='hero-content text-center'>
        <div className='max-w-mid'>
          <h1 className='text-5xl font-bold'>Hello buddy</h1>
          <p className='py-8'>
            Join us and experience the fun of live chatting globally, starting here in Mbabane
          </p>
          <button className='btn btn-primary' onClick={handleJoinClick}>
            Join us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

