import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function Star() {
  const [count, setCount] = useState(0);
  const [hoverCount, setHoverCount] = useState(0);

  // clickHandler
  const clickHandler = (index) => {
    if (index + 1 === count) {
      setCount(0);
    } else {
      setCount(index + 1);
    }
  };
  const hoverHandler = (index) => {
    setHoverCount(index + 1);
  };
  const mouseLeaveaHandler = () => {
    setHoverCount(0);
  };

  return (
    <div className="gap-8 flex flex-col justify-center">
      <div
        onMouseLeave={mouseLeaveaHandler}
        className="m-auto space-x-2 text-4xl flex"
      >
        {[1, 2, 3, 4, 5].map((star, index) => (
          <span
            key={index}
            onMouseOver={() => hoverHandler(index)}
            onMouseLeave={() => mouseLeaveaHandler}
            onClick={() => clickHandler(index)}
            className={`${index < count ? " text-yellow-400" : " text-black"} 
            ${index < hoverCount ? " text-yellow-600" : " text-black"}`}
          >
            <FaStar />
          </span>
        ))}
      </div>
      <h1 className="text-lg font-semibold">Rating is: {count}</h1>
    </div>
  );
}
