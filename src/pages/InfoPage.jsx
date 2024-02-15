import React from "react";
import Cafe01 from "../assets/MenuInfo/Cafe01.jpg";
import Cafe02 from "../assets/MenuInfo/Cafe02.jpg";
import MenuInfo from "../assets/MenuInfo/MenuInfo.png";
import LogoCat from "../layouts/LogoCat";
import Footer from "../layouts/Footer";
import Menu from "../layouts/Menu";

import QA1 from "../assets/Q-A/QA1.png";
import QA2 from "../assets/Q-A/QA2.png";
import QA3 from "../assets/Q-A/QA3.png";
import QA4 from "../assets/Q-A/QA4.png";
import QA5 from "../assets/Q-A/QA5.png";
import QA6 from "../assets/Q-A/QA6.png";
import QA7 from "../assets/Q-A/QA7.png";
import QA8 from "../assets/Q-A/QA8.png";
import QA9 from "../assets/Q-A/QA9.png";
import QA10 from "../assets/Q-A/QA10.png";
import QA11 from "../assets/Q-A/QA11.png";
import QA12 from "../assets/Q-A/QA12.png";
import QA13 from "../assets/Q-A/QA13.png";

// =============== < Function > =============== //
export default function InfoPage() {
  return (
    <div>
      <Menu />
      {/* ========== Img ========== */}
      <div className="flex justify-center items-center">
        <img
          className="h-auto max-w-full"
          src={MenuInfo}
          alt="image description"
        />
      </div>

      {/* ========== Img 01 ========== */}
      <div className="flex justify-center items-center">
        <img
          className="h-auto w-[55.8rem]"
          src={Cafe01}
          alt="image description"
        />
      </div>

      {/* ========== Img 02 ========== */}
      <div className="flex justify-center items-center">
        <img
          className="h-auto w-[55.8rem]"
          src={Cafe02}
          alt="image description"
        />
      </div>

      {/* ========== Q&A ========== */}
      <div>
        <h1 className="flex justify-center items-center font-bold text-gray-600 text-[2rem] p-2">
          คำถามที่พบบ่อย
        </h1>

        {/* ========== QA 1 ========== */}
        <div className="flex justify-center items-center">
          <img className="h-auto w-[50rem]" src={QA1} alt="image description" />
        </div>
        <br />

        {/* ========== QA 2 ========== */}
        <div className="flex justify-center items-center">
          <img className="h-auto w-[50rem]" src={QA2} alt="image description" />
        </div>
        <br />

        {/* ========== QA 3 ========== */}
        <div className="flex justify-center items-center">
          <img className="h-auto w-[50rem]" src={QA3} alt="image description" />
        </div>
        <br />

        {/* ========== QA 4 ========== */}
        <div className="flex justify-center items-center">
          <img className="h-auto w-[50rem]" src={QA4} alt="image description" />
        </div>
        <br />

        {/* ========== QA 5 ========== */}
        <div className="flex justify-center items-center">
          <img className="h-auto w-[50rem]" src={QA5} alt="image description" />
        </div>
        <br />

        {/* ========== QA 6 ========== */}
        <div className="flex justify-center items-center">
          <img className="h-auto w-[50rem]" src={QA6} alt="image description" />
        </div>
        <br />

        {/* ========== QA 7 ========== */}
        <div className="flex justify-center items-center">
          <img className="h-auto w-[50rem]" src={QA7} alt="image description" />
        </div>
        <br />

        {/* ========== QA 8 ========== */}
        <div className="flex justify-center items-center">
          <img className="h-auto w-[50rem]" src={QA8} alt="image description" />
        </div>
        <br />

        {/* ========== QA 9 ========== */}
        <div className="flex justify-center items-center">
          <img className="h-auto w-[50rem]" src={QA9} alt="image description" />
        </div>
        <br />

        {/* ========== QA 10 ========== */}
        <div className="flex justify-center items-center">
          <img className="h-auto w-[50rem]" src={QA10} alt="image description" />
        </div>
        <br />

        {/* ========== QA 11 ========== */}
        <div className="flex justify-center items-center">
          <img className="h-auto w-[50rem]" src={QA11} alt="image description" />
        </div>
        <br />

        {/* ========== QA 12 ========== */}
        <div className="flex justify-center items-center">
          <img className="h-auto w-[50rem]" src={QA12} alt="image description" />
        </div>
        <br />

        {/* ========== QA 13 ========== */}
        <div className="flex justify-center items-center">
          <img className="h-auto w-[50rem]" src={QA13} alt="image description" />
        </div>
        <br />

        {/* ========== Footer ========== */}
        <div className=" flex justify-center items-center">
          <LogoCat />
        </div>
      </div>
      <Footer />
    </div>
  );
}
