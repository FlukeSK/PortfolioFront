import React from "react";
import Img07 from "../../assets/Foods/Img07.jpg";

export default function Smoothie() {
  return (
    <div>
      <h1 className="flex justify-center items-center font-bold text-gray-400 text-[2rem]">
        SMOOTHIE & FRAPPE
      </h1>
      {/* ========== SMOOTHIE & FRAPPE 1 ========== */}
      <div className="flex justify-center items-center">
        <img className="w-[20rem] m-8 rounded-lg" src={Img07} alt="image description" />
        <p className=" font-bold">
          Tropical Passion.........................................148
          Baht
          <br />
          Dubble Berry..............................................148
          Baht
          <br />
          Coco-Twist..................................................148
          Baht
          <br />
          Thai Iced Tea Frappe..................................148 Baht
          <br />
          Caramel Milk Frappe..................................148 Baht
          <br />
          Cafe Latte Frappe........................................148 Baht
          <br />
          Chocolate Frappe........................................148 Baht
        </p>
      </div>
    </div>
  );
}
