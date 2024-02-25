const s1 = document.querySelector("#s1");
const s2 = document.querySelector("#s2");
const s3 = document.querySelector("#s3");
const s4 = document.querySelector("#s4");
const s5 = document.querySelector("#s5");

const count = document.querySelector("#count");

const starsArr = [s1, s2, s3, s4, s5];

let num = 0;
function handler(e) {
  console.log("clicked");
  num = starsArr.indexOf(e.srcElement) + 1;
  console.log("num is: ", num);
  for (let i = 0; i < starsArr.length; i++) {
    starsArr[i].style.color = "black";
  }
  for (let i = 0; i < num; i++) {
    starsArr[i].style.color = "yellow";
  }
  console.log(num);
  count.innerText = num;
}

function handler1(e) {
  console.log("entered");
  let num = starsArr.indexOf(e.srcElement) + 1;
  for (let i = 0; i < starsArr.length; i++) {
    starsArr[i].style.color = "black";
  }
  for (let i = 0; i < num; i++) {
    starsArr[i].style.color = "yellow";
  }
}
function handler2() {
  for (let i = 0; i < starsArr.length; i++) {
    starsArr[i].style.color = "black";
  }
  for (let i = 0; i < num; i++) {
    starsArr[i].style.color = "yellow";
  }
}

s1.addEventListener("click", handler);
s2.addEventListener("click", handler);
s3.addEventListener("click", handler);
s4.addEventListener("click", handler);
s5.addEventListener("click", handler);

s1.addEventListener("mouseover", handler1);
s2.addEventListener("mouseover", handler1);
s3.addEventListener("mouseover", handler1);
s4.addEventListener("mouseover", handler1);
s5.addEventListener("mouseover", handler1);

s1.addEventListener("mouseleave", handler2);
s2.addEventListener("mouseleave", handler2);
s3.addEventListener("mouseleave", handler2);
s4.addEventListener("mouseleave", handler2);
s5.addEventListener("mouseleave", handler2);
