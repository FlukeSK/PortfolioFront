import React from "react";
import LOGO from "../assets/Info/LOGO.png";

// =============== < Function > =============== //
export default function LogoCat() {
    return (
        <div className=" flex justify-center items-center">
        <img className="h-auto w-[14rem] p-2" src={LOGO} alt="image description" />
        </div>
    )
}