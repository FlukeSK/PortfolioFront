import React from "react";
import Menu from "../layouts/Menu";
import Footer from "../layouts/Footer";
import LogoCat from "../layouts/LogoCat";

function QuePage() {
  return (
    // ========== Start ========== //
    <div>
      <Menu />
      {/* ========== Function ========== */}
      <h1 className=" p-4 flex justify-center items-center font-bold text-gray-500 text-[2rem]">
        ROUND
      </h1>
      <br />
      <div className="flex justify-center">
        <div className=" border border-pink-500 bg-pink-300 border-x-2 border-y-2 flex flex-col justify-center items-center p-8 w-[30rem]">
          <select className=" select select-bordered w-full max-w-xs border border-pink-400 border-x-2 border-y-2 p-2 hover:border-pink-600">
            <option disabled selected>
              Select Round
            </option>
            <option>Round - เช้า เวลา 12:00pm | EMPTY</option>
            <option>Round - เช้า เวลา 14:00pm | EMPTY</option>
            <option>Round - บ่าย เวลา 16:00pm | EMPTY</option>
            <option>Round - บ่าย เวลา 18:00pm | EMPTY</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center p-2">
        <div
          className=" border border-pink-500 bg-pink-300 hover:border-pink-600 border-x-2 border-y-2 flex justify-center items-center w-[5
          rem]"
        >
          <select className=" text-gray-600 border-pink-400 ">
            <option disabled selected>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เลือกจำนวนคน
            </option>
            <option>&nbsp;1 คน Price 200 Baht</option>
            <option>&nbsp;2 คน Price 400 Baht</option>
            <option>&nbsp;3 คน Price 600 Baht</option>
            <option>&nbsp;4 คน Price 800 Baht</option>
            <option>&nbsp;5 คน Price 1,000 Baht</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          <input
            type="date"
            value="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <input
            type="time"
            max={"20:00"}
            min={"11:00"}
            value="hr"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex justify-center p-2">
      <div className="flex justify-center bg-pink-400 border border-x-2 border-y-2 w-[7rem] text-white font-bold hover:bg-pink-500 p-1">
          <button>Cancel</button>
        </div>
        <div className="flex justify-center bg-pink-400 border border-x-2 border-y-2 w-[7rem] text-white font-bold hover:bg-pink-500 p-1">
          <button>Next</button>
        </div>
      </div>
      {/* ========== End ========== */}
      <br />
      <br />
      <LogoCat />
      <br />
      <Footer />
    </div>
  );
}
export default QuePage;
