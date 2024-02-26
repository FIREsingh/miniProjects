const box = document.querySelector(".box");
const box4 = document.querySelector("#box4");
const cont = document.querySelector(".cont");

const arr = [];

function clickHandler(e) {
  arr.push(e.target);
  e.target.style.background = "red";
  console.log("target: ");
  console.log(arr);
}

function btn4ClickHandler() {
  const timer = setInterval(() => {
    if (arr.length > 0) {
      let del = arr.shift();
      console.log("del: ", del.id);
      del.style.background = "white";
    } else {
      console.log("done");
      clearInterval(timer);
    }
  }, 1000);
}

cont.addEventListener("click", clickHandler);
box4.addEventListener("click", btn4ClickHandler);
