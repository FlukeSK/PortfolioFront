import React from "react";
import Footer from "../layouts/Footer";
import LogoCat from "../layouts/LogoCat";

export default function CheckQueue() {
  return (
    <div className="border border-pink-500">
      <div tabIndex={0} className="collapse bg-pink-500">
        <div className="collapse-title text-xl font-medium">
          CheckQueue
        </div>

        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
      <LogoCat />
      <br />
      <Footer />
    </div>
  );
}
