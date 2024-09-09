'use client'


import React from 'react'
//import './Footer.css'
import { CiInstagram, CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


function Footer() {
  return (

    <div className='Footer  bg-green-500 font-medium flex flex-col justify-center items-center gap-4'>


      <div className="pageLinksSection flex flex-col justify-center items-center gap-2">
        <p className=' text-orange-400 font-bold' >Useful links:</p>

        <div className="pageLinks  flex gap-5  ">

          <a className="text-white hover:bg-green-500" href="">Home</a>
          <a className=" text-white hover:bg-green-500" href="">Recipe</a>
          <a className=" text-white hover:bg-green-500" href="">Contact</a>

        </div>

      </div>

      <div className="iconSection flex flex-col justify-center items-center gap-2 ">

        <p className=' text-orange-400 font-bold'>Also Contact Us on:</p>

        <div className="iconsList text bold text-white flex gap-5 ">
          <CiInstagram className='hover:bg-green-500' size={40} />
          <CiFacebook className='hover:bg-green-500' size={40} />
          <CiLinkedin className='hover:bg-green-500' size={40} />
          <FaGithub className='hover:bg-green-500' size={40} />
        </div>

      </div>
      {/* <Form></Form> */}

      <p className=' text-orange-400 font-bold'> &#169;2024 Abhishek Patil </p>
    </div>
  )
}

export default Footer