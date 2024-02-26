import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Star from "./components/Star";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" space-y-7">
      <h1 className=" font-semibold text-5xl">Star Rating</h1>
      <Star />
    </div>
  );
}

export default App;
