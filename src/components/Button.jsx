import { children } from "react";
import React from "react";

const bgClass = {
    pink: 'bg-pink-200 hover:bg-pink-300',
    red: 'bg-red-200 hover:bg-red-300',
    purple: 'bg-purple-200 hover:bg-purple-300',
    blue: 'bg-blue-200 hover:bg-blue-300',
    cyan: 'bg-cyan-200 hover:bg-cyan-300'
};

const colorClass = {
    white: 'text-white',
    black: 'text-black',
    pink: 'text-pink'
};

const widthClass = {
    full: "w-full"
};

// =============== < function > =============== //
export default function Button({ children, bg, color, width, onClick }) {
    let classes = bg ? bgClass[bg] : '';
classes + " " + color ? colorClass[color] : '';
classes + " " + width ? widthClass[width] : '';

// =============== < Return > =============== //
return (
    <button className={`px-3 py-1.5 rounded-md ${classes}`} onClick={onClick}> 
        {children} 
    </button>
);
};