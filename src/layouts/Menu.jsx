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
          role="button"
          className="bg-pink-400 flex justify-between items-between"
        >
          <ul className="flex justify-between items-start p-4 m-2 gap-4 text-white font-semibold">
            <li>
              <a href="../pages/HomePage.jsx">Home</a>
            </li>

            <li>
              <a href="../pages/CatsPage.jsx">Cat</a>
            </li>

              <li>
                <a href="../pages/FoodPage.jsx">Food</a>
              </li>

            <li>
              <a href="../pages/QuePage.jsx">Queue</a>
            </li>

            <li>
              <a href="../pages/InfoPage.jsx">Info</a>
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
                        <a href="../pages/LoginPage.jsx">Logout</a>
                      </li>

                      <li>
                        <a href="../pages/CheckUser.jsx">Check User</a>
                      </li>

                      <li>
                        <a href="../pages/CheckQueue.jsx">Check Queue</a>
                      </li>
                    </>
                  ) : (
                    // ===== User =====
                    <>
                      <li>
                        <a href="../pages/LoginPage.jsx">Logout</a>
                      </li>

                      <li>
                        <a href="../pages/ChangePasswordPage.jsx">Change Password</a>
                      </li>
                    </>
                  )
                ) : (
                  // ===== Guest ===== //
                  <>
                    <li>
                      <a href="../features/auth/components/RegisterForm.jsx">Register</a>
                    </li>

                    <li>
                      <a href="../pages/LoginPage.jsx">Login</a>
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
