'use client'
import React, {useState} from 'react'
import {FaEye } from "react-icons/fa6";
import {FaEyeSlash } from "react-icons/fa";
import './page.css'

const page = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="page">
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter password"
      />
      <button onClick={handleShowPassword}>
        {showPassword ? <FaEye /> : <FaEyeSlash/>}
      </button>
    </div>
  );
};

export default page;