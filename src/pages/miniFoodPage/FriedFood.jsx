import React from "react";
import Img01 from "../../assets/Foods/Img01.jpg";
import Img02 from "../../assets/Foods/Img02.jpg";

export default function FriedFood() {
  return (
    <div>
      <h1 className="flex justify-center items-center font-bold text-gray-400 text-[2rem]">
        FRIED FOOD
      </h1>

      {/* ========== FRIED FOOD 1 ========== */}
      <div className="flex justify-center items-center">
        <img className=" w-[20rem] m-8 rounded-lg" src={Img01} alt="image description" />
        <p>
          Beacon Cheese Sping Roll.....................138 Baht <br />
          Mix Cheese...................................................138 Baht
          <br />
          Cheese Ball...................................................118 Baht
          <br />
          Crispy Beacon With Cheese Lava.........118 Baht
        </p>
      </div>

      {/* ========== FRIED FOOD 2 ========== */}
      <div className="flex justify-center items-center">
        <p>
          Cheese
          Fries........................................................148 Baht
          <br />
          Chicks n' Chips...................................................138
          Baht <br />
          Caturday Fries.....................................................138
          Baht <br />
          Japanese Fried Dumplings.............................118 Baht
        </p>
        <img className="w-[20rem] m-8 rounded-lg" src={Img02} alt="image description" />
      </div>
    </div>
  );
}
