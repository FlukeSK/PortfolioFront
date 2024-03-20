import React from "react";
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
      <div className=" flex justify-center items-center">
        <img
          className="rounded-none h-auto max-w-full "
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

      {/* ========== Card 01-A ========== */}
      <div className="flex justify-between items-baseline px-8">
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-x-2 border-y-2 border-cyan-400 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Beacon} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Beacon</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 7 Year
              <br />
              &nbsp;&nbsp;Breed : Exotic
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>

        {/* ========== Card 02-A ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Buby} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Buby</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 7 Year
              <br />
              &nbsp;&nbsp;Breed : Exotic
              <br />
              &nbsp;&nbsp;Like : Chicken
            </p>
          </div>
        </div>

        {/* ========== Card 03-A ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-x-2 border-y-2 border-pink-400 transition hover:scale-110 hover:shadow-pink-200">
          <figure>
            <img src={Japba} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Japba</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 7 Year
              <br />
              &nbsp;&nbsp;Breed : Exotic
              <br />
              &nbsp;&nbsp;Like : Chicken
            </p>
          </div>
        </div>

        {/* ========== Card 04-A ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={aifel} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Aifel</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 10 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>

        {/* ========== Card 05-A ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
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

        {/* ========== Card 06-A ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Happy} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Bobby</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 6 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Chicken
            </p>
          </div>
        </div>
      </div>

      <br />
      {/* ========== Card 07-B ========== */}
      <div className="flex justify-between items-baseline px-8">
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Krai} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Krai</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 10 Year
              <br />
              &nbsp;&nbsp;Breed : American
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>
        {/* ========== Card 08-B ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
          <figure>
            <img src={Winter} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Winter</h2>
            <p>
              &nbsp;&nbsp;Gender : Girl
              <br />
              &nbsp;&nbsp;Age : 6 Year
              <br />
              &nbsp;&nbsp;Breed : British Shorthair
              <br />
              &nbsp;&nbsp;Like : Chicken
            </p>
          </div>
        </div>

        {/* ========== Card 09-B ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
          <figure>
            <img src={Misty} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Misty</h2>
            <p>
              &nbsp;&nbsp;Gender : Girls
              <br />
              &nbsp;&nbsp;Age : 7 Year
              <br />
              &nbsp;&nbsp;Breed : British Shorthair
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>

        {/* ========== Card 10-B ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Mika} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Mika</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 10 Year
              <br />
              &nbsp;&nbsp;Breed : British Shorthair
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 11-B ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Harry} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Harry</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 4 Year
              <br />
              &nbsp;&nbsp;Breed : British Shorthair
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>

        {/* ========== Card 12-B ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Zaicrop} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Zaicrop</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 7 Year
              <br />
              &nbsp;&nbsp;Breed : Persian
              <br />
              &nbsp;&nbsp;Like : Chicken
            </p>
          </div>
        </div>
      </div>

      <br />
      {/* ========== Card 13-C ========== */}
      <div className="flex justify-between items-baseline px-8">
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
          <figure>
            <img src={MiwMiw} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : MiwMiw</h2>
            <p>
              &nbsp;&nbsp;Gender : Girl
              <br />
              &nbsp;&nbsp;Age : 10 Year
              <br />
              &nbsp;&nbsp;Breed : Persian
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>

        {/* ========== Card 14-C ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Frodo} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Frodo</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Kinkalow
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 15-C ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Yeti} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Yeti</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 11 Year
              <br />
              &nbsp;&nbsp;Breed : Himalayan
              <br />
              &nbsp;&nbsp;Like : Chicken
            </p>
          </div>
        </div>

        {/* ========== Card 16-C ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Zimba} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Zimba</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 9 Year
              <br />
              &nbsp;&nbsp;Breed : Maine Coon
              <br />
              &nbsp;&nbsp;Like : Party Mix
            </p>
          </div>
        </div>

        {/* ========== Card 17-C ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Bozo} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Bozo</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 6 Year
              <br />
              &nbsp;&nbsp;Breed : Maine Coon
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>

        {/* ========== Card 18-C ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Lika} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Lika</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 6 Year
              <br />
              &nbsp;&nbsp;Breed : Maine Coon
              <br />
              &nbsp;&nbsp;Like : Chicken
            </p>
          </div>
        </div>
      </div>
      <br />

      {/* ========== Card 19-D ========== */}
      <div className="flex justify-between items-baseline px-8">
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
          <figure>
            <img src={Fyby} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Fyby</h2>
            <p>
              &nbsp;&nbsp;Gender : Girl
              <br />
              &nbsp;&nbsp;Age : 5 Year
              <br />
              &nbsp;&nbsp;Breed : Scottish Fold
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 20-D ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Eongtrong} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Eongtrong</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 6 Year
              <br />
              &nbsp;&nbsp;Breed : Scottish Fold
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>

        {/* ========== Card 21-D ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Shimp} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Shimp</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 5 Year
              <br />
              &nbsp;&nbsp;Breed : Scottish Fold
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>

        {/* ========== Card 23-D ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Udong} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Udong</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 5 Year
              <br />
              &nbsp;&nbsp;Breed : Scottish Fold
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 24-D ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
          <figure>
            <img src={Toro} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Toro</h2>
            <p>
              &nbsp;&nbsp;Gender : Girl
              <br />
              &nbsp;&nbsp;Age : 8 Year
              <br />
              &nbsp;&nbsp;Breed :Scottish Fold
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>

        {/* ========== Card 25-D ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
          <figure>
            <img src={Tako} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Tako</h2>
            <p>
              &nbsp;&nbsp;Gender : Girl
              <br />
              &nbsp;&nbsp;Age : 8 Year
              <br />
              &nbsp;&nbsp;Breed : Scottish Fold
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>
      </div>
      <br />

      {/* ========== Card 26-E ========== */}
      <div className="flex justify-between items-baseline px-8">
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
          <figure>
            <img src={OneDa} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : OneDa</h2>
            <p>
              &nbsp;&nbsp;Gender : Girl
              <br />
              &nbsp;&nbsp;Age : 6 Year
              <br />
              &nbsp;&nbsp;Breed : Scottish
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>

        {/* ========== Card 27-E ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
          <figure>
            <img src={Anya} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Anya</h2>
            <p>
              &nbsp;&nbsp;Gender : Girl
              <br />
              &nbsp;&nbsp;Age : 1 Year
              <br />
              &nbsp;&nbsp;Breed : Scottish
              <br />
              &nbsp;&nbsp;Like : Tuna
            </p>
          </div>
        </div>

        {/* ========== Card 28-E ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Grayteal} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Grayteal</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 7 Year
              <br />
              &nbsp;&nbsp;Breed : American Curl
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>

        {/* ========== Card 29-E ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
          <figure>
            <img src={BingBong} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Bingbong</h2>
            <p>
              &nbsp;&nbsp;Gender : Girl
              <br />
              &nbsp;&nbsp;Age : 1 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>

        {/* ========== Card 30-E ========== */}
        <div className="card rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
          <figure>
            <img src={Bobby} alt="Album" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">&nbsp;&nbsp;Name : Bobby</h2>
            <p>
              &nbsp;&nbsp;Gender : Boy
              <br />
              &nbsp;&nbsp;Age : 1 Year
              <br />
              &nbsp;&nbsp;Breed : Munchkin
              <br />
              &nbsp;&nbsp;Like : Cat Snack
            </p>
          </div>
        </div>
      </div>

      {/* // ========== End ========== // */}
      <br />
      <LogoCat />
      <Footer />
    </>
  );
}
export default CatsPage;
