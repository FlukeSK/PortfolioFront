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
import sisterday from "../assets/Cats/daysi.jpg";
import { useState } from "react";
import { useEffect } from "react";

import { BadgeX } from "../icons";

function CatsPage() {
  // const [input, setInput] = useState({
  //   nameCat,
  //   genderCat,
  //   ageCat,
  //   breedCat,
  //   foodCat,
  // });

  // =============== < Handle > =============== //
  // const handleChangeInput = (e) => {
  //   setInput({ ...input, [e.target.nameCat]: e.target.value });
  // };

  // const handleSubmit = (e) => {

  // };

  // const handleDelete = (e) => {

  // };

  // const [images, setImages] = useState([]);
  // const [imagesURLs, setImagesURLs] = useState([]);

  // useEffect(() => {
  //   if (images.length < 1) return;
  //   const newImagesUrls = [];
  //   images.forEach(image => newImagesUrls.push(URL.createObjectURL))
  // })

  return (
    // ========== Start ========== //

    <>
      <div
        className=""
        style={{
          backgroundSize: "2000px 2000px",
          backgroundImage:
            "url(https://img.freepik.com/free-vector/blurred-valentine-s-day-wallpaper_23-2148819570.jpg?w=996&t=st=1710775724~exp=1710776324~hmac=5d64db4d8645a2be4c6bfeedb15cc1b7fd02d444c9822719a2493273ada71e80)",
        }}
      >
        <div className=" flex justify-center items-center">
          <img
            className="rounded-none h-[485px] max-w-[715px] "
            src={Cats}
            alt="image description"
          />
        </div>
        <br />
        <div>
          <h1 className=" hover:scale-105 flex justify-center items-center font-bold text-gray-500 text-[2rem] p-2">
            Family CaturdayCat Cafe
          </h1>
        </div>
        <br />

        {/* ========== Card 01-A ========== */}
        <div className="flex justify-between items-baseline px-8">
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-x-2 border-y-2 border-cyan-400 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Beacon} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Beacon</li>
                <li>Gender : Boy</li>
                <li>Age : 7 Year</li>
                <li>Breed : Exotic</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 02-A ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Buby} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Buby</li>
                <li>Gender : Boy</li>
                <li>Age : 7 Year</li>
                <li>Breed : Exotic</li>
                <li>Like : Chicken</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 03-A ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-x-2 border-y-2 border-pink-400 transition hover:scale-110 hover:shadow-pink-200">
            <figure>
              <img src={Japba} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Japba</li>
                <li>Gender : Girls</li>
                <li>Age : 7 Year</li>
                <li>Breed : Exotic</li>
                <li>Like : Chicken</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 04-A ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={aifel} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Aifel</li>
                <li>Gender : Boy</li>
                <li>Age : 10 Year</li>
                <li>Breed : Munchkin</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 05-A ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
            <figure>
              <img src={Piza} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Piza</li>
                <li>Gender : Girls</li>
                <li>Age : 9 Year</li>
                <li>Breed : Munchkin</li>
                <li>Like : Tuna</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 06-A ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Happy} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Bobby</li>
                <li>Gender : Boy</li>
                <li>Age : 6 Year</li>
                <li>Breed : Munchkin</li>
                <li>Like : Chicken</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>
        </div>

        <br />
        {/* ========== Card 07-B ========== */}
        <div className="flex justify-between items-baseline px-8">
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Krai} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Krai</li>
                <li>Gender : Boy</li>
                <li>Age : 10 Year</li>
                <li>Breed : American</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>
          {/* ========== Card 08-B ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
            <figure>
              <img src={Winter} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Winter</li>
                <li>Gender : Girl</li>
                <li>Age : 6 Year</li>
                <li>Breed : British Shorthair</li>
                <li>Like : Chicken</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 09-B ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
            <figure>
              <img src={Misty} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Misty</li>
                <li>Gender : Girls</li>
                <li>Age : 7 Year</li>
                <li>Breed : British Shorthair</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 10-B ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Mika} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Mika</li>
                <li>Gender : Boy</li>
                <li>Age : 10 Year</li>
                <li>Breed : British Shorthair</li>
                <li>Like : Tuna</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 11-B ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Harry} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Harry</li>
                <li>Gender : Boy</li>
                <li>Age : 4 Year</li>
                <li>Breed : British Shorthair</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 12-B ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Zaicrop} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Zaicrop</li>
                <li>Gender : Boy</li>
                <li>Age : 7 Year</li>
                <li>Breed : Persian</li>
                <li>Like : Chicken</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>
        </div>

        <br />
        {/* ========== Card 13-C ========== */}
        <div className="flex justify-between items-baseline px-8">
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
            <figure>
              <img src={MiwMiw} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : MiwMiw</li>
                <li>Gender : Girl</li>
                <li>Age : 10 Year</li>
                <li>Breed : Persian</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 14-C ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Frodo} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Frodo</li>
                <li>Gender : Boy</li>
                <li>Age : 9 Year</li>
                <li>Breed : Kinkalow</li>
                <li>Like : Tuna</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 15-C ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Yeti} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Yeti</li>
                <li>Gender : Boy</li>
                <li>Age : 11 Year</li>
                <li>Breed : Himalayan</li>
                <li>Like : Chicken</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 16-C ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Zimba} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Zimba</li>
                <li>Gender : Boy</li>
                <li>Age : 9 Year</li>
                <li>Breed : Maine Coon</li>
                <li>Like : Party Mix</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 17-C ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Bozo} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Bozo</li>
                <li>Gender : Boy</li>
                <li>Age : 6 Year</li>
                <li>Breed : Maine Coon</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 18-C ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Lika} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Lika</li>
                <li>Gender : Boy</li>
                <li>Age : 6 Year</li>
                <li>Breed : Maine Coon</li>
                <li>Like : Chicken</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>
        </div>
        <br />

        {/* ========== Card 19-D ========== */}
        <div className="flex justify-between items-baseline px-8">
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
            <figure>
              <img src={Fyby} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Fyby</li>
                <li>Gender : Girl</li>
                <li>Age : 5 Year</li>
                <li>Breed : Scottish Fold</li>
                <li>Like : Tuna</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 20-D ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Eongtrong} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Eongtrong</li>
                <li>Gender : Boy</li>
                <li>Age : 6 Year</li>
                <li>Breed : Scottish Fold</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 21-D ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Shimp} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Shimp</li>
                <li>Gender : Boy</li>
                <li>Age : 5 Year</li>
                <li>Breed : Scottish Fold</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 23-D ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Udong} alt="Album" />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>Name : Udong</li>
                <li>Gender : Boy</li>
                <li>Age : 5 Year</li>
                <li>Breed : Scottish Fold</li>
                <li>Like : Tuna</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 24-D ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
            <figure>
              <img src={Toro} alt="Album" />
            </figure>
            <div className="card-body ">
            <ul className=" pl-2">
                <li>Name : Toro</li>
                <li>Gender : Girl</li>
                <li>Age : 8 Year</li>
                <li>Breed :Scottish Fold</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 25-D ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
            <figure>
              <img src={Tako} alt="Album" />
            </figure>
            <div className="card-body ">
            <ul className=" pl-2">
                <li>Name : Tako</li>
                <li>Gender : Girl</li>
                <li>Age : 8 Year</li>
                <li>Breed : Scottish Fold</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>
        </div>
        <br />

        {/* ========== Card 26-E ========== */}
        <div className="flex justify-between items-baseline px-8">
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
            <figure>
              <img src={OneDa} alt="Album" />
            </figure>
            <div className="card-body ">
            <ul className=" pl-2">
                <li>Name : OneDa</li>
                <li>Gender : Girl</li>
                <li>Age : 6 Year</li>
                <li>Breed : Scottish</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 27-E ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
            <figure>
              <img src={Anya} alt="Album" />
            </figure>
            <div className="card-body ">
            <ul className=" pl-2">
                <li>Name : Anya</li>
                <li>Gender : Girl</li>
                <li>Age : 1 Year</li>
                <li>Breed : Scottish</li>
                <li>Like : Tuna</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 28-E ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Grayteal} alt="Album" />
            </figure>
            <div className="card-body ">
            <ul className=" pl-2">
                <li>Name : Grayteal</li>
                <li>Gender : Boy</li>
                <li>Age : 7 Year</li>
                <li>Breed : American Curl</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 29-E ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
            <figure>
              <img src={BingBong} alt="Album" />
            </figure>
            <div className="card-body ">
            <ul className=" pl-2">
                <li>Name : Bingbong</li>
                <li>Gender : Girl</li>
                <li>Age : 1 Year</li>
                <li>Breed : Munchkin</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 30-E ========== */}
          <div className="card bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <img src={Bobby} alt="Album" />
            </figure>
            <div className="card-body ">
            <ul className=" pl-2">
                <li>Name : Bobby</li>
                <li>Gender : Boy</li>
                <li>Age : 1 Year</li>
                <li>Breed : Munchkin</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>

          {/* ========== Card 31-E ========== */}
          <div className="card  bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-pink-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-pink-200">
            <figure>
              <img
                className="h-[11.7rem] w-[12rem]"
                src={sisterday}
                alt="Album"
              />
            </figure>
            <div className="card-body ">
            <ul className=" pl-2">
                <li>Name : Daisy</li>
                <li>Gender : Girl</li>
                <li>Age : 1 Year</li>
                <li>Breed : Bengal</li>
                <li>Like : Cat Snack</li>
              </ul>
            </div>
            <div className="flex justify-end text-pink-600">
              <button>
                <BadgeX />
              </button>
            </div>
          </div>
        </div>
        <br />

        {/* =============== Add Cat =============== */}
        <div className="flex justify-between items-baseline px-8">
          <div className="card p-2 bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[14rem] border border-pink-400 border-x-2 border-y-2 transition hover:shadow-pink-200">
            <figure>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>
                  Name :
                  <input
                    // onChange={handleChangeInput}
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>
                <li>
                  Gender :
                  <input
                    // onChange={handleChangeInput}
                    type="text"
                    placeholder="Gender"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>

                <li>
                  Age :
                  <input
                    // onChange={handleChangeInput}
                    type="text"
                    placeholder="Age"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>

                <li>
                  Breed :
                  <input
                    // onChange={handleChangeInput}
                    type="text"
                    placeholder="Breed"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>

                <li>
                  Like :
                  <input
                    // onChange={handleChangeInput}
                    type="text"
                    placeholder="Like"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <button className=" bg-pink-400 text-white hover:bg-pink-600 flex justify-center content-center border-2 border-pink-600 px-2">
                CONFRIM
              </button>
            </div>
          </div>
        </div>

        {/* // ========== End ========== // */}
        <br />
        <LogoCat />
      </div>
      <Footer />
      <div />
    </>
  );
}
export default CatsPage;
