import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

// =============== < Function > =============== //
export default function Menu() {
  // =============== < Return > =============== //
  return (
    <div>
      <div>
        <div
          className="bg-pink-400 flex justify-between items-between"
        >
          <ul  role="button" className="flex justify-between items-start p-4 m-2 gap-4 text-white font-semibold">
            <li>
              <a href="/home">Home</a>
            </li>

            <li>
              <a href="/cat">Cat</a>
            </li>

              <li>
                <a href="/food">Food</a>
              </li>

            <li>
              <a href="/queue">Queue</a>
            </li>

            <li>
              <a href="/info">Info</a>
            </li>
          </ul>

          <div>
            <button>
              <ul className="flex justify-between items-start p-4 m-2 gap-4 text-white font-semibold">
                {false ? (
                  // ===== Role ===== //
                  //   ===== ADMIN =====
                  true ? (
                    <>
                      <li>
                        <a href="/login">Logout</a>
                      </li>

                      <li>
                        <a href="/">Check User</a>
                      </li>

                      <li>
                        <a href="/">Check Queue</a>
                      </li>
                    </>
                  ) : (
                    // ===== User =====
                    <>
                      <li>
                        <a href="/login">Logout</a>
                      </li>

                      <li>
                        <a href="/">Change Password</a>
                      </li>
                    </>
                  )
                ) : (
                  // ===== Guest ===== //
                  <>
                    <li>
                      <a href="/login">Login</a>
                    </li>
                  </>
                )}
              </ul>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
