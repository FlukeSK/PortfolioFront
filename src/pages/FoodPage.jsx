import MENU from "../assets/Foods/MENU.png";
import FriedFood from "./miniFoodPage/FriedFood";
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

import LogoReact from "../layouts/LogoReact";

// =============== < Function > =============== //
export default function FoodPage() {
  return (
    <div>
      <div
        className=""
        style={{
          backgroundSize: "5500px 5500px",
          backgroundImage:
            "url(https://img.freepik.com/free-vector/blurred-valentine-s-day-wallpaper_23-2148819570.jpg?w=996&t=st=1710775724~exp=1710776324~hmac=5d64db4d8645a2be4c6bfeedb15cc1b7fd02d444c9822719a2493273ada71e80)",
        }}
      >
        {/* ========== Img ========== */}
        <div className="flex justify-center items-center">
          <img
            className="h-auto max-w-full"
            src={MENU}
            alt="image description"
          />
        </div>
        <br />
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
        <br />
        {/* ========== Footer ========== */}
        <div className=" flex justify-center items-center">
          <LogoReact />
        </div>
        <Footer />
      </div>
    </div>
  );
}
