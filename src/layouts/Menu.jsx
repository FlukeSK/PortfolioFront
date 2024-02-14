import React from "react";
import "../index.css";

// =============== < Function > =============== //
export default function Menu() {
  // =============== < Return > =============== //
  return (
    <div>
      <div>
        <div
          role="button"
          className="bg-pink-400 flex justify-between items-between"
        >
          <ul className="flex justify-between items-start p-4 m-2 gap-4 text-white font-semibold">
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>Cat</a>
            </li>

            <li>
              <a>Food</a>
            </li>

            <li>
              <a>Queue</a>
            </li>

            <li>
              <a>Info</a>
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
                      <a>Logout</a>
                    </li>

                    <li>
                      <a>Check User</a>
                    </li>
                    
                    <li>
                      <a>Check Queue</a>
                    </li>
                  </>
                  ) : (
                    // ===== User =====
                    <>
                    <li>
                      <a>Logout</a>
                    </li>

                    <li>
                      <a>Change Password</a>
                    </li>
                  </>
                  )
                ) : (
                  // ===== Guest ===== //
                  <>
                    <li>
                      <a>Register</a>
                    </li>

                    <li>
                      <a>Login</a>
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
