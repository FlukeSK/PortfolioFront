import Cafe01 from "../assets/MenuInfo/Cafe01.jpg";
import Cafe02 from "../assets/MenuInfo/Cafe02.jpg";
import MenuInfo from "../assets/MenuInfo/MenuInfo.png";
import LogoCat from "../layouts/LogoCat";
import Footer from "../layouts/Footer";

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
    <div
      className=""
      style={{
        backgroundSize: "4000px 4000px",
        backgroundImage:
          "url(https://img.freepik.com/free-vector/blurred-valentine-s-day-wallpaper_23-2148819570.jpg?w=996&t=st=1710775724~exp=1710776324~hmac=5d64db4d8645a2be4c6bfeedb15cc1b7fd02d444c9822719a2493273ada71e80)",
      }}
    >
      {/* ========== Img ========== */}
      <div className="flex justify-center items-center">
        <img
          className="h-[485px] max-w-[715px]"
          src={MenuInfo}
          alt="image description"
        />
      </div>

      {/* ========== Img 01 ========== */}
      <div className="flex justify-center items-center">
        <img
          className="h-[485px] max-w-[715px]"
          src={Cafe01}
          alt="image description"
        />
      </div>

      {/* ========== Img 02 ========== */}
      <div className="flex justify-center items-center">
        <img
          className="h-[485px] max-w-[715px]"
          src={Cafe02}
          alt="image description"
        />
      </div>

      {/* ========== Q&A ========== */}
      <div>
        <br />
        <h1 className=" hover:scale-105 flex justify-center items-center font-bold text-gray-600 text-[2rem] p-2">
          คำถามที่พบบ่อย
        </h1>
        <br />
        {/* ========== QA 1 ========== */}
        <div className="flex justify-center items-center">
          <img className="hover:scale-125 h-auto w-[45rem] duration-200" 
          src={QA1} alt="image description" />
        </div>
        <br />

        {/* ========== QA 2 ========== */}
        <div className="flex justify-center items-center">
          <img className="hover:scale-125 h-auto w-[45rem] duration-200" 
          src={QA2} alt="image description" />
        </div>
        <br />

        {/* ========== QA 3 ========== */}
        <div className="flex justify-center items-center">
          <img className="hover:scale-125 h-auto w-[45rem] duration-200" 
          src={QA3} alt="image description" />
        </div>
        <br />

        {/* ========== QA 4 ========== */}
        <div className="flex justify-center items-center">
          <img className="hover:scale-125 h-auto w-[45rem] duration-200" 
          src={QA4} alt="image description" />
        </div>
        <br />

        {/* ========== QA 5 ========== */}
        <div className="flex justify-center items-center">
          <img className="hover:scale-125 h-auto w-[45rem] duration-200" 
          src={QA5} alt="image description" />
        </div>
        <br />

        {/* ========== QA 6 ========== */}
        <div className="flex justify-center items-center">
          <img className="hover:scale-125 h-auto w-[45rem] duration-200" 
          src={QA6} alt="image description" />
        </div>
        <br />

        {/* ========== QA 7 ========== */}
        <div className="flex justify-center items-center">
          <img className="hover:scale-125 h-auto w-[45rem] duration-200" 
          src={QA7} alt="image description" />
        </div>
        <br />

        {/* ========== QA 8 ========== */}
        <div className="flex justify-center items-center">
          <img className="hover:scale-125 h-auto w-[45rem] duration-200" 
          src={QA8} alt="image description" />
        </div>
        <br />

        {/* ========== QA 9 ========== */}
        <div className="flex justify-center items-center">
          <img className="hover:scale-125 h-auto w-[45rem] duration-200" 
          src={QA9} alt="image description" />
        </div>
        <br />

        {/* ========== QA 10 ========== */}
        <div className="flex justify-center items-center">
          <img
            className="hover:scale-125 h-auto w-[45rem] duration-200"
            src={QA10}
            alt="image description"
          />
        </div>
        <br />

        {/* ========== QA 11 ========== */}
        <div className="flex justify-center items-center">
          <img
            className="hover:scale-125 h-auto w-[45rem] duration-200"
            src={QA11}
            alt="image description"
          />
        </div>
        <br />

        {/* ========== QA 12 ========== */}
        <div className="flex justify-center items-center">
          <img
            className="hover:scale-125 h-auto w-[45rem] duration-200"
            src={QA12}
            alt="image description"
          />
        </div>
        <br />

        {/* ========== QA 13 ========== */}
        <div className="flex justify-center items-center">
          <img
            className="hover:scale-125 h-auto w-[45rem] duration-200"
            src={QA13}
            alt="image description"
          />
        </div>
        <br />

        {/* ========== Footer ========== */}
        <div className=" flex justify-center items-center">
          <LogoCat />
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}
