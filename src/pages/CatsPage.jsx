import React from "react";
import Menu from "../layouts/Menu";
import Footer from "../layouts/Footer";
import LogoCat from "../layouts/LogoCat";

import Cats from "../assets/Cats/Cats.png";
import Piza from "../assets/Cats/Piza.jpg";
import Happy from "../assets/Cats/Happy.jpg";
import Anya from "../assets/Cats/อาเนีย.jpg";
import Frodo from "../assets/Cats/Frodo.jpg";
import aifel from "../assets/Cats/aifel.jpg";
import Mika from "../assets/Cats/มิกะ.jpg";
import Bobby from "../assets/Cats/bobby - boy.jpg";
import BingBong from "../assets/Cats/BingBong.jpg";
import Shimp from "../assets/Cats/ไข่กุ้ง.jpg";
import Krai from "../assets/Cats/ไคล์.jpg";
import Lika from "../assets/Cats/ไลก้า.jpg";
import Zaicrop from "../assets/Cats/ไซคอป.jpg";
import Bozo from "../assets/Cats/โบโซ.jpg";
import Toro from "../assets/Cats/โทโร่.jpg";
import Harry from "../assets/Cats/แฮรี่.jpg";
import MiwMiw from "../assets/Cats/แม่มิว.jpg";
import Japba from "../assets/Cats/แจ๊บบ้า.jpg";
import Yeti from "../assets/Cats/เยติ.jpg";
import Beacon from "../assets/Cats/เบค่อน.jpg";
import Grayteal from "../assets/Cats/เกรเทล.jpg";
import Udong from "../assets/Cats/อูด้ง.jpg";
import Eongtrong from "../assets/Cats/อองตวน.jpg";
import Winter from "../assets/Cats/วินเทอร์.jpg";
import OneDa from "../assets/Cats/วันด้า.jpg";
import Misty from "../assets/Cats/มิสตี้.jpg";
import Fyby from "../assets/Cats/ฟีบี้.jpg";
import Buby from "../assets/Cats/บู้บี้.jpg";
import Tako from "../assets/Cats/ทาโกะ.jpg";
import Zimba from "../assets/Cats/ซิมบ้า.jpg";

function CatsPage() {
  return (
    // ========== Start ========== //
    <>
      <Menu />
      <div className="flex justify-center items-center">
        <img
          className=" rounded-none h-auto max-w-full "
          src={Cats}
          alt="image description"
        />
      </div>
      <br />
<div>
      <h1 className="flex justify-center items-center font-bold text-gray-600 text-[2rem] p-2">
          Family CaturdayCat Cafe
        </h1>
        </div>
<br />

      {/* ========== Card 01 ========== */}
      <div className="flex justify-between items-baseline px-8">
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-x-2 border-y-2 border-pink-400">
          <figure>
            <img src={Piza} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Chicken
            </p>
          </div>
        </div>

        {/* ========== Card 02 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Happy} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Happy</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 5 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 03 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-x-2 border-y-2 border-pink-400">
          <figure>
            <img src={Anya} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Anya</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 2 Year
              <br />
              &nbsp;&nbsp;Breed : Scottish
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 04 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Frodo} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 05 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 ">
          <figure>
            <img src={BingBong} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 06 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Bobby} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 07 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Mika} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>
      </div>

      <br />
      {/* ========== Card 08 ========== */}
      <div className="flex justify-between items-baseline px-8">
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Shimp} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 09 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 ">
          <figure>
            <img src={OneDa} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 10 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Krai} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 11 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Lika} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 12 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Zimba} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 13 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Bozo} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 14 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Zaicrop} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Card 15 ========== */}
      <div className="flex justify-between items-baseline px-8">
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Grayteal} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 16 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Eongtrong} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 17 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Winter} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 18 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Misty} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 19 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Fyby} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 20 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Harry} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 21 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Beacon} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Card 23 ========== */}
      <div className="flex justify-between items-baseline px-8">
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Yeti} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 24 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Tako} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 25 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Buby} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 26 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Udong} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 27 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 ">
          <figure>
            <img src={MiwMiw} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 28 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Japba} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 29 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 ">
          <figure>
            <img src={Toro} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>
      </div>

      <br />

      {/* ========== Card 30 ========== */}
      <div className="flex justify-around items-baseline px-8">
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem]">
          <figure>
            <img src={Piza} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 31 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 ">
          <figure>
            <img src={aifel} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 32 ========== */}
        <div className="card lg:card-side bg-base-100 shadow-xl w-[12rem]">
          <figure>
            <img src={Piza} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Piza</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>
      </div>

      <br />

      {/* // ========== End ========== // */}
      <br />
      <LogoCat />
      <Footer />
    </>
  );
}
export default CatsPage;
