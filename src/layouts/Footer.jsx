import React from "react";
import "../index.css";

// =============== < Function > =============== //
export default function Footer() {
  return (
    <footer className="footer p-4 bg-neutral text-neutral-content bg-pink-400">
      <div className="flex justify-center items-center text-white font-bold">
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;🐾 Business Day 🐾
          <br />
          Open : Tuesday - Friday 12:00 a.m. - 8:00 p.m.
          <br />
          Open : Saturday - Sunday 11:00 a.m. - 8:00 p.m.
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;Close Every Monday
        </p>
      </div>
    </footer>
  );
}
