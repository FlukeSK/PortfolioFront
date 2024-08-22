import Footer from "../layouts/Footer";
import LogoReact from "../layouts/LogoReact";
import { Link } from "react-router-dom";

import shimp from "../assets/Cats/ไข่กุ้ง.jpg";
import Img05 from "../assets/Foods/Img05.jpg";
import Bobby from "../assets/Cats/bobby - boy.jpg";

function HomePage() {
  return (
    // ========== Start ========== //
    <div
      className=""
      style={{
        backgroundSize: "2000px 2000px",
        backgroundImage:
          "url(https://tuemaster.com/wp-content/uploads/2020/03/Shooting-Star-750x375.jpg)",
      }}
    >
      <br />
      <LogoReact />
      {/* // ========== IMG ========== // */}
      <div className="flex justify-center p-16 space-x-12 ">
        <div className=" border-pink-400 border-4 rounded-xl hover:scale-110 duration-200">
        <Link to="/cat">
          <img
            className=" rounded-t-md h-auto w-[10rem]"
            src={shimp}
            alt="image description"
          />

            <button className="flex justify-center items-center bg-pink-400 text-white font-bold w-full ">
              Resume
            </button>
          </Link>
        </div>
        <br />

        {/* // ========== IMG 2 ========== // */}
        <div className=" border-pink-400 border-4 rounded-xl hover:scale-110 duration-200">
        <Link to="/food">
          <img
            className=" rounded-t-md h-auto w-[10rem]"
            src={Img05}
            alt="image description"
          />


            <button className="flex justify-center items-center bg-pink-400 text-white font-bold w-full">
            Degree Certificate
            </button>
          </Link>
        </div>
        <br />

        {/* // ========== IMG 3 ========== // */}
        <div className=" border-pink-400 border-4 rounded-xl hover:scale-110 duration-200">
        <Link to="/queue">
          <img
            className=" rounded-t-md h-auto w-[10rem]"
            src={Bobby}
            alt="image description"
          />


            <button className=" flex justify-center items-center bg-pink-400 text-white font-bold w-full">
            Download CV
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
