import React from "react";
import { ToastContainer, Slide } from "react-toastify";
import Menu from "../layouts/Menu";
import Footer from "../layouts/Footer";
import LogoCat from "../layouts/LogoCat";

import Piza from "../assets/Cats/Piza.jpg";
import Happy from "../assets/Cats/Happy.jpg";
import Poppy from "../assets/Cats/poppy.jpg";

function HomePage() {
  return (
    // ========== Start ========== //
    <div>
      <Menu />
      <LogoCat />
      {/* // ========== IMG ========== // */}
      <div className="flex justify-center p-11 space-x-12">
        <div className=" border-pink-300 border-x-4 border-y-4 rounded-xl">
          <img
            className=" rounded-none h-auto w-[10rem]"
            src={Piza}
            alt="image description"
          />
          <button
            className="flex justify-center items-center bg-pink-300 text-white font-bold w-full"
            typeof="button"
          >
            Cats
          </button>
        </div>
        <br />

        {/* // ========== IMG 2 ========== // */}
        <div className=" border-pink-300 border-x-4 border-y-4 rounded-xl">
          <img
            className=" rounded-none h-auto w-[10rem]"
            src={Happy}
            alt="image description"
          />
          <button
            className="flex justify-center items-center bg-pink-300 text-white font-bold w-full"
            typeof="button"
          >
            Food
          </button>
        </div>
        <br />

        {/* // ========== IMG 3 ========== // */}
        <div className=" border-pink-300 border-x-4 border-y-4 rounded-xl">
          <img
            className=" rounded-none h-auto w-[10rem]"
            src={Poppy}
            alt="image description"
          />
          <button
            className="flex justify-center items-center bg-pink-300 text-white font-bold w-full"
            typeof="button"
          >
            Queue
          </button>
        </div>
      </div>
      <br />

      {/* // ========== End ========== // */}
      <Footer />
    </div>
  );
}
export default HomePage;
