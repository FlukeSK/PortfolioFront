import React from "react";
import Img08 from "../../assets/Foods/Img08.jpg";

export default function Soda() {
  return (
    <div>
      <h1 className="flex justify-center items-center font-bold text-gray-400 text-[2rem]">
        SODA
      </h1>

      <div className="flex justify-center items-center">
        <p>
          Iced Lychee Soda.....................................138 Baht
          <br />
          Iced Apple Soda.......................................138 Baht
          <br />
          Iced Strawbery..........................................138 Baht
          <br />
          Iced Ume (Plum) Soda...........................138 Baht
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 🐾 Served With JellBall 🐾
          <br />
          Caturday Drinking Water.........................38 Baht
        </p>
        <img className="w-[20rem] m-8 rounded-lg" src={Img08} alt="image description" />
      </div>
    </div>
  );
}
