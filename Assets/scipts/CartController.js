// import { cartArr } from "./controller.js";
window.addEventListener("load", bind);
// let hel;
let newArr;
const cartArr = JSON.parse(localStorage.getItem("cartArr"));

newArr = cartArr;

const hel = document.getElementById("hel");
console.log("HEl is ", hel);
function bind() {
  call();

  console.log("Data is ", cartArr);
}
const call = () => {
  hel.innerHTML = "";
  console.log("New Arr is",newArr);
  if (!newArr[0]) {
    const h1 = document.createElement("h1");
    h1.innerHTML = "Cart is Empty Please Add some Items Here";
    hel.appendChild(h1);
  }
  newArr.map((ele, index) => printOneElement(ele, index));
};

const DeleFromCart = (id) => {
  console.log("Id is ", id);
  newArr = newArr.filter((ele) => ele[0].id != id);
  localStorage.clear();
  localStorage.setItem("cartArr", JSON.stringify(newArr));
  bind();
};

const printOneElement = (ele, index) => {
  const { images, title, rating, price, id } = ele[0];
  console.log("Ele", ele);
  console.log(title, price, id);
  console.log("Title is ", title);
  const div = document.createElement("div");
  div.className = "card-div";
  const imgDiv = document.createElement("div");
  imgDiv.className = "img-div";
  const img = document.createElement("img");
  img.className = "card-img";
  img.src = `${images[0]}`;
  const titleDiv = document.createElement("div");
  titleDiv.className = "title-div";
  //   titleHead.innerHTML = title;
  const titleHead = document.createElement("h4");
  titleHead.className = "title-head";
  titleHead.innerHTML = title;
  const priceDiv = document.createElement("div");
  priceDiv.className = "price-div";
  const priceHead = document.createElement("h5");
  priceHead.className = "price-head";
  priceHead.innerHTML = price;
  const AdcBut = document.createElement("button");
  AdcBut.className = "AddToCart";
  AdcBut.innerText = "Delete";
  AdcBut.onclick = () => DeleFromCart(id);
  imgDiv.appendChild(img);
  priceDiv.appendChild(priceHead);
  titleDiv.appendChild(titleHead);
  div.appendChild(imgDiv);
  div.appendChild(titleDiv);
  div.appendChild(priceDiv);
  div.appendChild(AdcBut);
  hel.appendChild(div);
  //   hel.innerHTML = "";
};