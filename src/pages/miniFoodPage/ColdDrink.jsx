
import Img10 from "../../assets/Foods/Img10.jpg"

export default function ColdDrink() {
    return (
        <div>
        <h1 className="hover:scale-105 flex justify-center items-center font-bold text-gray-500 text-[2rem]">
          COLD DRINK
        </h1>

        <div className="flex justify-center items-center">
          <p className=" font-bold">
            Ice Americano..................................128 Baht
            <br />
            Ice Americano Yuzu.........................128 Baht
            <br />
            Ice Cafe Latte....................................128 Baht
            <br />
            Ice Cappuchino.................................128 Baht
            <br />
            Ice Caramel Macchiato.....................128 Baht
            <br />
            Ice Mocha..........................................128 Baht
            <br />
            Ice Match Green Tea Latte...............128 Baht
            <br />
            Ice Chocolate.....................................128 Baht
            <br />
            Thai Ice Tea........................................128 Baht
            <br />
            Lemon Ice Tea....................................128 Baht
          </p>
          <img className="duration-200 hover:scale-105 w-[20rem] m-8 rounded-lg" src={Img10} alt="image description" />
        </div>
      </div>
    )
}