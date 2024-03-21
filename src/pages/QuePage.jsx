import Footer from "../layouts/Footer";
import LogoCat from "../layouts/LogoCat";
import { useContext } from "react";
import { DateContext } from "../features/auth/contexts/DateContext";
import { Link } from "react-router-dom";

function QuePage() {
  const { date, setDate } = useContext(DateContext);

  return (
    // ========== Start ========== //

    <div
      className=""
      style={{
        backgroundSize: "2000px 2000px",
        backgroundImage:
          "url(https://img.freepik.com/free-vector/blurred-valentine-s-day-wallpaper_23-2148819570.jpg?w=996&t=st=1710775724~exp=1710776324~hmac=5d64db4d8645a2be4c6bfeedb15cc1b7fd02d444c9822719a2493273ada71e80)",
      }}
    >
      {/* ========== Function ========== */}
      <h1 className=" hover:scale-105 p-4 flex justify-center items-center font-bold text-gray-500 text-[2rem]">
        ROUND
      </h1>
      <div className="flex justify-center">
        <div>
          <input
          className=" border-2 border-pink-400 hover:border-pink-600 px-2"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col justify-center items-center p-6 w-[30rem]">
          <select
            className="
          select select-bordered w-full max-w-xs border border-pink-400 border-x-2 border-y-2 p-2 hover:border-pink-600"
          >
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
          <select className=" text-gray-600 border-pink-400 hover:border-pink-600 ">
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

      <div className="flex justify-center p-2">
        <div className="flex justify-center bg-pink-400 border-2 border-pink-400 hover:border-white w-[7rem] text-white font-bold hover:bg-pink-500 p-1">
          <Link to="/runqueue">
            <button>จองคิว</button>
          </Link>
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
