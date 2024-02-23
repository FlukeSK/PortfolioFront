import React from "react";
import Footer from "../layouts/Footer";
import LogoCat from "../layouts/LogoCat";
import { Link } from "react-router-dom";

import shimp from "../assets/Cats/ไข่กุ้ง.jpg"
import Img05 from "../assets/Foods/Img05.jpg"
import Bobby from "../assets/Cats/bobby - boy.jpg";


function HomePage() {
  return (
    // ========== Start ========== //
    <div>
      <br />
      <LogoCat />
      {/* // ========== IMG ========== // */}
      <div className="flex justify-center p-16 space-x-12">
        <div className=" border-pink-300 border-x-4 border-y-4 rounded-xl">
          <img
            className=" rounded-t-md h-auto w-[10rem]"
            src={shimp}
            alt="image description"
          />
          <Link to="/cat">
          <button
            className="flex justify-center items-center bg-pink-300 text-white font-bold w-full"
            typeof="button"
          >
            Cats
          </button>
          </Link>
        </div>
        <br />

        {/* // ========== IMG 2 ========== // */}
        <div className=" border-pink-300 border-x-4 border-y-4 rounded-xl">
          <img
            className=" rounded-t-md h-auto w-[10rem]"
            src={Img05}
            alt="image description"
          />

          <Link to="/food">
          <button
            className="flex justify-center items-center bg-pink-300 text-white font-bold w-full"
            typeof="button"
          >
            Food
          </button>
          </Link>
        </div>
        <br />

        {/* // ========== IMG 3 ========== // */}
        <div className=" border-pink-300 border-x-4 border-y-4 rounded-xl">
          <img
            className=" rounded-t-md h-auto w-[10rem]"
            src={Bobby}
            alt="image description"
          />

          <Link to="/queue">
          <button
            className=" flex justify-center items-center bg-pink-300 text-white font-bold w-full"
            typeof="button"
          >
            Queue
          </button>
          </Link>
        </div>
      </div>
      <br />

      {/* // ========== End ========== // */}
      <Footer />
    </div>
  );
}
export default HomePage;
