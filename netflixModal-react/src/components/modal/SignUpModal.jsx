import React from "react";
import { FaRegTimesCircle } from "react-icons/fa";

export default function SignUpModal({
  isSignInClicked,
  setIsSignInClicked,
  isLoginPageOpen,
  setLoginPageOpen,
}) {
  function closeHandler(e) {
    if (e.target.id === "container") {
      setIsSignInClicked(false);
      setLoginPageOpen(!isLoginPageOpen);
    }
  }
  
  return (
    <div
      id="container"
      onClick={closeHandler}
      className={` 
       shadow-lg relative z-10 flex items-center justify-center h-screen   backdrop-blur-md `}
    >
      <form
        className={` transition-all  p-10 w-3/12 h-4/6 bg-black rounded-xl bg-opacity-80 absolute text-slate-200 ${
          isSignInClicked ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className=" space-y-12  ">
          <h1 className=" my-10 text-4xl">Sign Up</h1>
          <div className=" flex flex-col gap-4 text-black ">
            <input
              className=" h-14 p-3 rounded-lg text-lg text-black"
              type="text"
              placeholder="Email"
            />

            <input
              className=" h-14 p-3 rounded-lg text-lg"
              type="password"
              placeholder="Password"
            />
            <input
              className=" h-14 p-3 rounded-lg text-lg"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div>
            <div className=" flex align-middle items-center space-x-4">
              <FaRegTimesCircle />
              <h1>At least one uppercase.</h1>
            </div>
            <div className=" flex align-middle items-center space-x-4">
              <FaRegTimesCircle />
              <h1>At least one number. </h1>
            </div>
            <div className=" flex align-middle items-center space-x-4">
              <FaRegTimesCircle />
              <h1>At least one special character. </h1>
            </div>
            <div className=" flex align-middle items-center space-x-4">
              <FaRegTimesCircle />
              <h1> At least 8 character.</h1>
            </div>
          </div>
          <button
            type="button"
            className=" w-full font-semibold focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
