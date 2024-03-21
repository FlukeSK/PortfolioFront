
import Img05 from "../../assets/Foods/Img05.jpg";

export default function Salad() {
  return (
    <div>
      <h1 className="hover:scale-105 flex justify-center items-center font-bold text-gray-500 text-[2rem]">
        SALAD
      </h1>
      {/* ========== SALAD 1 ========== */}
      <div className="flex justify-center items-center">
        <img className="duration-200 hover:scale-105 w-[20rem] m-8 rounded-lg" src={Img05} alt="image description" />
        <p className=" font-bold">
          Spicy Salmon....................................188 Baht
          <br />
          Seaweed Salad..................................138 Baht <br />
          Carb Stick & Ebiko
          Salad.................138 Baht
          <br />
          Chicken Stick
          Salad............................88 Baht
          <br />
        </p>
      </div>
    </div>
  );
}
