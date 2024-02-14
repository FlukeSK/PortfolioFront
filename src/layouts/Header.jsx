import React from 'react';
import LogoCat from "../assets/Info/LOGO.png";

// =============== < Function > =============== //
export default function Header() {
  return (
    <div className='flex justify-center items-center'>
    <img src={LogoCat} alt="Logo" />
  </div>
  )
}