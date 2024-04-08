import Footer from "../layouts/Footer";
import LogoCat from "../layouts/LogoCat";

import Cats from "../assets/Cats/Cats.png";
import Happy from "../assets/Cats/Happy.jpg";
import Beacon from "../assets/Cats/เบค่อน.jpg";
import { useState } from "react";
import { useEffect } from "react";
// import axios from "axios";
import { BadgeX } from "../icons";

import { fetchCat, fetchCatDelete } from "../api/auth-infocat.js";

export default function CatsPage() {
  const [input, setInput] = useState({
    nameCat: "",
    genderCat: "",
    ageCat: "",
    breedCat: "",
    foodCat: "",
    image: "",
  });

  const [data, setData] = useState([]);

  const fetchAPI = async () => {
    const response = await fetchCat();
    setData(response.data.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  console.log(data);

  // =============== < Handle > =============== //
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleAddCard = () => {
    const nextNumber = input.length + 1;
    setData([...input, { id: nextNumber, content: `Card ${nextNumber}` }]);
  };
  console.log(input)

  const handleDeleteCard = (id) => {
    console.log(id);
    fetchCatDelete(id
    //   , {
    //   method: "DELETE",
    // }
    )
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  

  const [images, setImages] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImagesUrls = [];
    images.forEach((setImages) => newImagesUrls.push(URL.createObjectURL));
  });

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

        {/* ========= < Card > ========== */}
        <div className="flex justify-around items-baseline px-8">
          {data.map((el, index) => (
            <div
              className="cards bg-white rounded-md lg:card-side bg-base-100 shadow-xl w-[12rem] border border-x-2 border-y-2 border-cyan-400 transition hover:scale-110 hover:duration-300 hover:shadow-cyan-200"
              key={index}
            >
              <img
                className=" w-[12rem] h-[12rem] object-cover rounded-bl-md rounded-br-md"
                src={el.image}
              />
              <p className="p-[0.2rem] ml-2">Name : {el.nameCat}</p>
              <p className="p-[0.2rem] ml-2">Gender : {el.genderCat}</p>
              <p className="p-[0.2rem] ml-2">Age : {el.ageCat}</p>
              <p className="p-[0.2rem] ml-2">Breed : {el.breedCat}</p>
              <p className="p-[0.2rem] ml-2">Food : {el.foodCat}</p>
              <div className="flex justify-end text-pink-600">
                <button onClick={() => handleDeleteCard(el.id)}>
                  <BadgeX className="hover:scale-110" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <br />

        {/* =============== Add Cat =============== */}
        <div className="flex justify-around items-baseline px-8">
          <div className="cards bg-white rounded-md lg:card-side bg-base-100 hover:duration-500 shadow-xl w-[12rem] border border-cyan-400 border-x-2 border-y-2 transition hover:scale-110 hover:shadow-cyan-200">
            <figure>
              <input
                type="file"
                name="image"
                className="file-input file-input-bordered w-full max-w-xs"
              />
              
            </figure>
            <div className="card-body ">
              <ul className=" pl-2">
                <li>
                  Name :
                  <input
                    onChange={handleChangeInput}
                    value={input.nameCat}
                    name="nameCat"
                    type="text"
                    placeholder="Gender"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>
                <li>
                  Gender :
                  <input
                    onChange={handleChangeInput}
                    value={input.genderCat}
                    type="text"
                    name="genderCat"
                    placeholder="Gender"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>

                <li>
                  Age :
                  <input
                    onChange={handleChangeInput}
                    value={input.ageCat}
                    name="ageCat"
                    type="text"
                    placeholder="Age"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>

                <li>
                  Breed :
                  <input
                    onChange={handleChangeInput}
                    type="text"
                    name="breedCat"
                    value={input.breedCat}
                    placeholder="Breed"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>

                <li>
                  Food :
                  <input
                    onChange={handleChangeInput}
                    type="text"
                    name="foodCat"
                    value={input.foodCat}
                    placeholder="Food"
                    className="input input-bordered w-full max-w-xs"
                  />
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleAddCard}
                className=" bg-pink-400 text-white hover:bg-pink-600 flex justify-center content-center border-2 border-pink-600 px-2"
              >
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
