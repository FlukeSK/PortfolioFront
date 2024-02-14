import React from "react";
import Img12 from "../../assets/Foods/Img12.jpg";

export default function CatTreats() {
    return (
        <div>
        <h1 className="flex justify-center items-center font-bold text-gray-400 text-[2rem]">
          CAT TREATS
        </h1>
        <div className="flex justify-center items-center">
        <img className="w-[20rem] m-8 rounded-lg" src={Img12} alt="image description" />
        </div>
        <div className="flex justify-center items-center">
          <p>
            Tuna Feed............................40 Baht
            <br />
            Cat Snack.............................40 Baht
            <br />
            Dried Chicken.....................50 Baht
            <br />
            Party Mix...............................80 Baht
          </p>
        </div>
      </div>
    )
}


