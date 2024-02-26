import React, { useState } from "react";
import Header from "./Header";
import LoginModal from "./modal/LoginModal";

export default function HomePage() {
  const [isSignInClicked, setIsSignInClicked] = useState(false);
  const [isLoginPageOpen, setLoginPageOpen] = useState(true);
  return (
    <div>
      <Header
        isSignInClicked={isSignInClicked}
        setIsSignInClicked={setIsSignInClicked}
        isLoginPageOpen={isLoginPageOpen}
        setLoginPageOpen={setLoginPageOpen}
      />
      <div>
        <img
          className=" absolute top-0 h-screen z-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Background Image"
        />
      </div>
    </div>
  );
}
