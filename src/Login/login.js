import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../NavBar/nav';

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setUserPassword] = useState('');
  const navigate = useNavigate(); // Import and assign useNavigate

  toast.success('Login successful!', {
    position: toast.POSITION.TOP_RIGHT,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log({ result });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <NavBar />
      <form className="form" onSubmit={handleSubmit}>
        <h1>LOGIN FORM</h1>
        <h1>Login</h1>
        <input
          placeholder="Enter username"
          type="text"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          placeholder="Enter password"
          type="password"
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button
          type="submit"
          onClick={() => {
            navigate('/products'); // Use the navigate function to redirect
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;