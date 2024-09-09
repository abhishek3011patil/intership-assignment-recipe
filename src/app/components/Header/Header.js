
'use client'
import React, { useState } from 'react';
import Button from '../Button/Button.js';
//import './Header.css';

import { IoMenuSharp } from "react-icons/io5";


function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const expandContainer = () => {
    setMenuVisible(prev => !prev);
  };
  

  return (
    <div id="header " className="text-yellow-900 bg-cream-500 font-bold  flex justify-between p-3 items-center">
      <IoMenuSharp></IoMenuSharp>
      <div className='flex gap-6 '>
      <a href="">Home</a><a href="">Recipes</a><a href="">Collections</a>
      </div>
      <button type="button" onClick={() => {console.log("hello")}}>Sign up</button>
      </div>
  );
}

export default Header;
