import React from "react";
import "../index.css";
import useAuth from "../hooks/use-auth";

// =============== < Function > =============== //
export default function Menu() {
  const {authUser, logout} = useAuth()
  // =============== < Return > =============== //
  return (
    <div>
      <div>
        <div className="flex justify-between items-between">
          <ul
            role="button"
            className="flex justify-between items-start p-4 m-2 gap-4 text-white font-semibold"
          >
            <li>
              <a className=" hover:text-pink-700 duration-300" href="/">Home</a>
            </li>

            <li>
              <a className=" hover:text-pink-700 duration-300" href="/cat">Cat</a>
            </li>

            <li>
              <a className=" hover:text-pink-700 duration-300" href="/food">Food</a>
            </li>

            <li>
              <a className=" hover:text-pink-700 duration-300" href="/gift">Gift</a>
            </li>

            <li>
              <a className=" hover:text-pink-700 duration-300" href="/queue">Queue</a>
            </li>

            <li>
              <a className=" hover:text-pink-700 duration-300" href="/info">Info</a>
            </li>
          </ul>

          <div>
            <button>
              <ul className="flex justify-between items-start p-4 m-2 gap-4 text-white font-semibold">
                {authUser ? (
                  // ===== Role ===== //
                  //   ===== ADMIN =====
                  authUser.status == "admin" ? (
                    <>
                      <li>
                        <a className=" hover:text-pink-700 duration-300" href="/checkuser">Check User</a>
                      </li>

                      <li>
                        <a className=" hover:text-pink-700 duration-300" href="/checkqueue">Check Queue</a>
                      </li>

                      <li>
                        <a className=" hover:text-pink-700 duration-300" href="/">Update Queue</a>
                      </li>

                      <li>
                        <p className=" hover:text-pink-700 duration-300" onClick={logout}>Logout</p>
                      </li>
                    </>
                  ) : (
                    // ===== User =====
                    <>
                      <li >
                        <a className=" hover:text-pink-700 duration-300" onClick={logout}>Logout</a>
                      </li>

                      <li>
                        <a className=" hover:text-pink-700 duration-300" href="/changepassword">Change Password</a>
                      </li>
                    </>
                  )
                ) : (
                  // ===== Guest ===== //
                  <>
                    <li>
                      <a className=" hover:text-pink-700 duration-300">Login</a>
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
