import Footer from "../layouts/Footer";
import LogoCat from "../layouts/LogoCat";

import { useContext } from "react";
import { DateContext } from "../features/auth/contexts/DateContext";

export default function CheckQueue() {
  const { date, setDate } = useContext(DateContext);

  return (
    <div>
      <br />
      <br />
      <div className="flex justify-center">
        <div>
          <input
          className=" border-2 border-pink-400 hover:border-pink-600 px-2"
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
                <th></th>
                <th>&nbsp;รอบ&nbsp;</th>
                <th>&nbsp;เวลา&nbsp;</th>
                <th>&nbsp;จำนวน&nbsp;</th>
                <th>&nbsp;ราคา&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className=" hover:bg-gray-200">
                <th>&nbsp;R1&nbsp;</th>
                <td>&nbsp;เช้า&nbsp;</td>
                <td>&nbsp;12:00pm&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;</td>
                <th>&nbsp;200&nbsp;</th>
              </tr>
            </tbody>
          </table>
        </div>
        <LogoCat />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
}
