import React from "react";
import Footer from "../layouts/Footer";
import LogoCat from "../layouts/LogoCat";

export default function CheckUser() {
  return (
    <div>
          <br />
    <div className="overflow-x-auto p-[5%] flex justify-center">
      <table className="table border border-black">
        {/* head */}
        <thead className="bg-pink-400 border border-black text-white">
          <tr>
            <th></th>
            <th>&nbsp;FirstName&nbsp;</th>
            <th>&nbsp;LastName&nbsp;</th>
            <th>&nbsp;Email&nbsp;</th>
            <th>&nbsp;Mobile&nbsp;</th>
            <th>&nbsp;Password&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className=" hover:bg-gray-200">
            <th>&nbsp;1&nbsp;</th>
            <td>frodo</td>
            <td>shimp</td>
            <td>admin@gmail.com</td>
            <th>&nbsp;1234567897&nbsp;</th>
            <th>&nbsp;123456&nbsp;</th>
          </tr>
          {/* row 2 */}
          <tr className=" hover:bg-gray-200">
            <th>2</th>
            <td>piza</td>
            <td>papoy</td>
            <td>usern@gmail.com</td>
            <th>0995199000</th>
            <th>123456</th>
          </tr>
          {/* row 3 */}
          <tr className=" hover:bg-gray-200">
            <th>3</th>
            <td>cat</td>
            <td>cafe</td>
            <td>caturday@gmail.com</td>
            <th>0995199000</th>
            <th>123456</th>
          </tr>
          {/* row 4 */}
          <tr className=" hover:bg-gray-200">
            <th>4</th>
            <td>test</td>
            <td>cat</td>
            <td>testcc@gmail.com</td>
            <th>0123456788</th>
            <th>123456</th>
          </tr>
          {/* row 5 */}
          <tr className=" hover:bg-gray-200">
            <th>5</th>
            <td>jane</td>
            <td>cat</td>
            <td>jjj@gmail.com</td>
            <th>0123456787</th>
            <th>123456</th>
          </tr>
          {/* row 6 */}
          <tr className=" hover:bg-gray-200">
            <th>6</th>
            <td>jim</td>
            <td>mi</td>
            <td>jim@gmail.com</td>
            <th>0123456786</th>
            <th>123456</th>
          </tr>
          {/* row 7 */}
          <tr className=" hover:bg-gray-200">
            <th>7</th>
            <td>jims</td>
            <td>miz</td>
            <td>jivm@gmail.com</td>
            <th>0995199222</th>
            <th>123456</th>
          </tr>
        </tbody>
      </table>
    </div>
    <LogoCat />
    <br />
            <Footer />
    </div>
  );
}
