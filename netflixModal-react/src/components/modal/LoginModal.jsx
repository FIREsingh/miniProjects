import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginModal({
  isSignInClicked,
  setIsSignInClicked,
  isLoginPageOpen,
  setLoginPageOpen,
}) {
  function closeHandler(e) {
    if (e.target.id === "container") {
      setIsSignInClicked(!isSignInClicked);
    }
  }
  const navigate = useNavigate();

  function signUpHandler() {
    setLoginPageOpen(!isLoginPageOpen);
  }

  return (
    <div
      id="container"
      onClick={closeHandler}
      className={` 
       shadow-lg relative z-10 flex items-center justify-center h-screen backdrop-blur-md `}
    >
      <form
        className={` transition-all  p-10 w-3/12 h-4/6 bg-black rounded-xl bg-opacity-80 absolute text-slate-200 ${
          isSignInClicked ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className=" space-y-12  ">
          <h1 className=" my-10 text-4xl">Sign In</h1>
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
          </div>
          <button
            type="button"
            className=" w-full font-semibold focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            SignIn
          </button>
          <div className=" font-thin">
            <h1>Remember me</h1>
            <h1>
              New to Netflix?
              <span
                onClick={signUpHandler}
                className=" font-semibold cursor-pointer "
              >
                {"  "}Sign up now.
              </span>
            </h1>
          </div>
        </div>
      </form>
    </div>
  );
}
