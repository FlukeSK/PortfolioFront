import React from "react";
import Img09 from "../../assets/Foods/Img09.jpg";

export default function Hottea() {
    return (
        <div>
        <h1 className="flex justify-center items-center font-bold text-gray-400 text-[2rem]">
          HOTTEA
        </h1>

        <div className="flex justify-center items-center">
          <img className="w-[20rem] m-8 rounded-lg" src={Img09} alt="image description" />
          <p className=" font-bold">
            Hottea - Peach................................148 Baht
            <br />
            Hottea - Green................................148 Baht
            <br />
            Hottea - Earl Grey...........................148 Baht
            <br />
            Hottea - English Breakfast.............148 Baht
            <br />
            Hottea - Blueberry And Vanilla.....148 Baht
          </p>
        </div>
      </div>
    )
}