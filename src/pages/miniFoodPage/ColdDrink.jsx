import React from "react";
import Img10 from "../../assets/Foods/Img10.jpg"

export default function ColdDrink() {
    return (
        <div>
        <h1 className="flex justify-center items-center font-bold text-gray-400 text-[2rem]">
          COLD DRINK
        </h1>

        <div className="flex justify-center items-center">
          <p>
            Ice Americano...........................................128 Baht
            <br />
            Ice Americano Yuzu................................128 Baht
            <br />
            Ice Cafe Latte.............................................128 Baht
            <br />
            Ice Cappuchino.........................................128 Baht
            <br />
            Ice Caramel Macchiato...........................128 Baht
            <br />
            Ice Mocha....................................................128 Baht
            <br />
            Ice Match Green Tea Latte.....................128 Baht
            <br />
            Ice Chocolate..............................................128 Baht
            <br />
            Thai Ice Tea..................................................128 Baht
            <br />
            Lemon Ice Tea.............................................128 Baht
          </p>
          <img className="w-[20rem] m-8 rounded-lg" src={Img10} alt="image description" />
        </div>
      </div>
    )
}