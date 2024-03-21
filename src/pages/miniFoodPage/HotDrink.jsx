
import Img11 from "../../assets/Foods/Img11.jpg"

export default function HotDrink() {
    return (
        <div>
        <h1 className="hover:scale-105 flex justify-center items-center font-bold text-gray-500 text-[2rem]">
          HOT DRINK
        </h1>

        <div className="flex justify-center items-center">
        <img className="duration-200 hover:scale-105 w-[20rem] m-8 rounded-lg" src={Img11} alt="image description" />
          <p className=" font-bold">
            Hot Match Green Tea Latte..........128 Baht
            <br />
            Hot Caramel Milk..........................128 Baht
            <br />
            Hot Chocolate................................128 Baht
            <br />
            Caramel Latte Macchiato..............128 Baht
            <br />
            Cafe' Latte.......................................128 Baht
            <br />
            Cappuchino.....................................128 Baht
            <br />
            Americano.......................................128 Baht
            <br />
            Espresso...........................................128 Baht
            <br />
            Mocha..............................................128 Baht
          </p>
        </div>
      </div>
    )
}


