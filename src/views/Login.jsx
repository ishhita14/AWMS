//email : iotdashboard@awms.com
//password : awms12345
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nheader from '../components/Nheader';
import { auth } from '../firebase/config.js';
import backgroundImage from '../assets/images/image.png';

import { 
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handlePasswordReset() {
    const emailInput = prompt('Please enter your email');
    sendPasswordResetEmail(auth, emailInput);
    alert('Email sent! Check your email for password reset instructions.');
  }

  function handleLogin(e) {
    e.preventDefault();
    
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        
        window.location.href = "/dashIot";
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Login error:', errorMessage);
        setError(errorMessage);
        alert(errorMessage);
      });
  }

  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  };
  return (
    <>
      <Nheader />
      <div className='iotbg' style={styles}>
        <div className="h-100vh flex">
          <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center">
            <div className="bg-black opacity-20 inset-0 z-0"></div>
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6 text-white">
              <h1 className='iotlogin text-5xl font-bold'>WELCOME TO AWMS DASHBOARD </h1>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 justify-center items-center ">
            <div className="w-full px-8 md:px-32 lg:px-24">
              <form className="rounded-md shadow-2xl p-5">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                  <input id="email" className="pl-2 w-full outline-none border-none shadow-none bg-transparent text-white focus:bg-transparent" type="email" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <input className="pl-2 w-full outline-none border-none bg-transparent text-white" type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={(e) => handleLogin(e)} className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-gray-700  transition-all duration-500 text-white font-semibold mb-2">Login</button>
                <div className="flex justify-center mt-4">
                  <span onClick={handlePasswordReset} className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all text-white">Forgot Password?</span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default Login;
