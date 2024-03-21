
import Img06 from "../../assets/Foods/Img06.jpg";

export default function Cake() {
  return (
    <div>
      <h1 className=" hover:scale-105 flex justify-center items-center font-bold text-gray-500 text-[2rem]">
        CAKE
      </h1>

      <div className="flex justify-center items-center">
        <p className=" font-bold">

          Honey Toast With Ice-Cream..............................178
          Baht
          <br />
          Choc Lava Served With
          <br />
          Whipped Cream And Ice-Cream.........................148 Baht
          <br />
          Blueberry Cheese
          Pie...........................................138 Baht
          <br />
          Strawberry Cheese
          Pie.........................................138 Baht
          <br />
          Soft Chocolate
          Cake.............................................138 Baht
          <br />
          Choco
          Shock.........................................................138
          Baht
        </p>
        <img className="duration-200 hover:scale-105 w-[20rem] m-8 rounded-lg" src={Img06} alt="image description" />
      </div>
    </div>
  );
}
