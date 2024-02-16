import React from "react";
import Menu from "../layouts/Menu";
import Footer from "../layouts/Footer";

export default function CheckUser() {
  return (
    <div>
      <Menu />
      <div className="border border-pink-500">
        <div tabIndex={0} className="collapse bg-pink-500">
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content">
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
