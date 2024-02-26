import React, { useState } from "react";
import LoginModal from "./modal/LoginModal";
import SignUpModal from "./modal/SignUpModal";

export default function Header(props) {
  const {
    isSignInClicked,
    setIsSignInClicked,
    isLoginPageOpen,
    setLoginPageOpen,
  } = props;

  function signHandler() {
    setIsSignInClicked(!isSignInClicked);

    console.log(setIsSignInClicked);
  }

  return (
    <div>
      <div className=" flex justify-between items-center align-middle  w-full z-20 px-8 py-2 bg-gradient-to-b from-black absolute">
        <div className=" w-full ">
          <img
            className=""
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            width={200}
            alt="logo"
          />
        </div>
        <div>
          {!isSignInClicked && (
            <button
              onClick={signHandler}
              type="button"
              className=" font-semibold focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              SignIn
            </button>
          )}
        </div>
      </div>
      <div>
        {isSignInClicked && isLoginPageOpen && (
          <LoginModal
            isSignInClicked={isSignInClicked}
            setIsSignInClicked={setIsSignInClicked}
            isLoginPageOpen={isLoginPageOpen}
            setLoginPageOpen={setLoginPageOpen}
          />
        )}
        {isSignInClicked && !isLoginPageOpen && (
          <SignUpModal
            isSignInClicked={isSignInClicked}
            setIsSignInClicked={setIsSignInClicked}
            isLoginPageOpen={isLoginPageOpen}
            setLoginPageOpen={setLoginPageOpen}
          />
        )}
      </div>
    </div>
  );
}
