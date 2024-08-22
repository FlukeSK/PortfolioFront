import Footer from "../../layouts/Footer";
import LogoReact from "../../layouts/LogoReact";

import { useContext } from "react";
import { DateContext } from "../../features/auth/contexts/DateContext";

export default function CheckQueue() {
  const { date, setDate } = useContext(DateContext);

  return (
    <div>
      <br />
      <br />
      <div className="flex justify-center">
        <div>
          <input
            className=" rounded-md border-2 border-pink-400 hover:border-pink-600 px-2"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
      </div>

      <div>
        <div className="overflow-x-auto p-[5%] flex justify-center">
          <table className="table border border-black">
            {/* head */}
            <thead className="bg-pink-400 border border-black text-white">
              <tr>
                <th>&nbsp;เลขคิว&nbsp;</th>
                <th>&nbsp;รอบ&nbsp;</th>
                <th>&nbsp;เวลา&nbsp;</th>
                <th>&nbsp;จำนวน&nbsp;</th>
                <th>&nbsp;ราคา&nbsp;</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className=" hover:bg-gray-100">
                <th>&nbsp;R1&nbsp;</th>
                <td>&nbsp;เช้า&nbsp;</td>
                <td>&nbsp;12:00pm&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;</td>
                <th>&nbsp;200&nbsp;</th>
                <div className="flex justify-center m-2">
                  <button className="px-4 rounded-md bg-pink-400 text-white font-bold hover:bg-pink-500 border-2 border-white">
                    Confrim
                  </button>
                  <button className="px-4 rounded-md bg-pink-400 text-white font-bold hover:bg-pink-500 border-2 border-white">
                    Cancel
                  </button>
                </div>
              </tr>
            </tbody>

            {/* row 1 */}
            <tbody>
              <tr className=" hover:bg-gray-100">
                <th>&nbsp;R2&nbsp;</th>
                <td>&nbsp;บ่าย&nbsp;</td>
                <td>&nbsp;14:00pm&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;</td>
                <th>&nbsp;400&nbsp;</th>
                <div className="flex justify-center m-2">
                  <button className="px-4 rounded-md bg-pink-400 text-white font-bold hover:bg-pink-500 border-2 border-white">
                    Confrim
                  </button>
                  <button className="px-4 rounded-md bg-pink-400 text-white font-bold hover:bg-pink-500 border-2 border-white">
                    Cancel
                  </button>
                </div>
              </tr>
            </tbody>

            <tbody>
              {/* row 3 */}
              <tr className=" hover:bg-gray-100">
                <th>&nbsp;R3&nbsp;</th>
                <td>&nbsp;บ่าย&nbsp;</td>
                <td>&nbsp;14:00pm&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;</td>
                <th>&nbsp;600&nbsp;</th>
                <div className="flex justify-center m-2">
                  
                  <button className="px-4 rounded-md bg-pink-400 text-white font-bold hover:bg-pink-500 border-2 border-white">
                    Confrim
                  </button>
                  <button 
                  className="px-4 rounded-md bg-pink-400 text-white font-bold hover:bg-pink-500 border-2 border-white"
                  >
                    Cancel
                  </button>
                </div>
              </tr>
            </tbody>

          </table>
        </div>

        <LogoReact />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}
