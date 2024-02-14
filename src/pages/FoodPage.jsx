import React from "react";
import MENU from "../assets/Foods/MENU.png";
import FriedFood from "./miniFoodPage/FriedFood"
import MainDish from "./miniFoodPage/MainDish";
import Salad from "./miniFoodPage/Salad";
import Cake from "./miniFoodPage/Cake";
import Smoothie from "./miniFoodPage/Smoothie";
import Soda from "./miniFoodPage/Soda";
import Hottea from "./miniFoodPage/Hottea";
import ColdDrink from "./miniFoodPage/ColdDrink";
import HotDrink from "./miniFoodPage/HotDrink";
import CatTreats from "./miniFoodPage/CatTreats";
import Footer from "../layouts/Footer";
import LogoCat from "../layouts/LogoCat";

export default function FoodPage() {
  return (
    <div>
      {/* ========== Img ========== */}
      <div className="flex justify-center items-center">
        <img className="h-auto max-w-full" src={MENU} alt="image description" />
      </div>
      {/* ========== FRIED FOOD ========== */}
      <FriedFood />
      {/* ========== MAIN DISH ========== */}
      <MainDish />
      {/* ========== SALAD ========== */}
      <Salad />
      {/* ========== CAKE ========== */}
      <Cake />
      {/* ========== SMOOTHIE & FRAPPE ========== */}
      <Smoothie />
      {/* ========== SODA ========== */}
      <Soda />
      {/* ========== HOTTEA ========== */}
      <Hottea />
      {/* ========== COLD DRINK ========== */}
      <ColdDrink />
      {/* ========== HOT DRINK ========== */}
      <HotDrink />
      {/* ========== CAT TREATS ========== */}
      <CatTreats />
      {/* ========== Footer ========== */}
      <div className=" flex justify-center items-center">
      <LogoCat />
      </div>
      <Footer />
    </div>
  );
}
