const bt = document.querySelector("button");
const bgdiv = document.querySelector(".bg");
const colordiv = document.querySelector(".color");
let cl = "color";
console.log(bt);
bt.addEventListener("click", () => {
  const para = document.createElement("p");
  const cbox = document.createElement("div");
  // const br = document.createElement("br");

  colordiv.appendChild(para);
  colordiv.appendChild(cbox);
  // colordiv.appendChild(br);
  cbox.style.height = "20px";
  cbox.style.width = "20px";

  para.textContent = cl;
  cbox.style.background = cl;
  console.log("hi i am off");
});
const bg = setInterval(() => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  cl = "rgb" + "(" + red + "," + green + "," + blue + ")";
  console.log("rgb" + "(" + red + "," + green + "," + blue + ")");
  bgdiv.style.background = cl;
}, 1000);
console.log(bg);
