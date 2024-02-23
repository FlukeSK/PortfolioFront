import React from "react";
import Footer from "../../layouts/Footer";
import LogoCat from "../../layouts/LogoCat";

import BotQueue from "../../components/BotQueue";

export default function RunQue() {
  return (
    <div>
      <br />
      <div>
        <div className="flex justify-center items-center p-10">
          <a className="p-2 text-[1.5rem] font-bold">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;เลขบัตรคิว
            R1-CAT01 <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            วันศุกร์ที่ 23 กุมภาพันธ์ 2567 <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Round - เช้า เวลา 12:00pm 1 คน Price 200 Baht
            <br />กรุณานำเลขบัตรคิวไปยื่นให้ที่พนักงานหน้าร้านได้เลยครับ <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Thank
            you
          </a>
        </div>
      </div>
      <LogoCat />
      <br />
      <br />
      <Footer />
    </div>
  );
}
