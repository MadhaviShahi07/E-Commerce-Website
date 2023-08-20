// import { printOneElement } from "./CartController.js";
window.addEventListener("load", manycalls);

function manycalls() {
  bindEvents();
  getData();
}

function bindEvents() {
  //   document.getElementById("but").addEventListener("click", getData);
  document.getElementById("but").addEventListener("click", openCart);
  document.getElementById("search-btn").addEventListener("click", search);
  document.getElementById("mob").addEventListener("click", printmob);
  document.getElementById("price").addEventListener("click", printlaptops);
  document.getElementById("all").addEventListener("click", printall);

  //   document.getElementById("ht").addEventListener("click", hiCart);
}
let productArr = [];
export let cartArr = [];

const URL =
  "https://raw.githubusercontent.com/brainmentorspvtltd/json-data/main/products.json";

const getData = async () => {
  let response = await fetch(URL);
  console.log(response);
  let Data = await response.json();
  console.log("Json is", Data);
  fillData(Data);
};

const printmob = () => {
  const newArr = productArr.filter((ele) => ele.category == "smartphones");
  const section = document.getElementById("products-list");
  section.innerHTML = "";
  newArr.map((ele) => printCards(ele));
};
const printlaptops = () => {
  const newArr = productArr.filter((ele) => ele.category == "laptops");
  const section = document.getElementById("products-list");
  section.innerHTML = "";
  newArr.map((ele) => printCards(ele));
};
const printall = () => {
  const section = document.getElementById("products-list");
  section.innerHTML = "";
  const newArr = productArr.slice();
  newArr.map((ele) => printCards(ele));
};
const search = () => {
  const textin = document.getElementById("search-text");
  const text = textin.value;

  const newArr = productArr.filter(
    (ele) => ele.id == text || ele.title == text
  );

  console.log(newArr);
  const section = document.getElementById("products-list");
  section.innerHTML = "";
  newArr.map((ele) => printCards(ele));
};
const openCart = () => {
  window.location.href = "Cart.html";
  console.log("Add to Cart ", id);
  let newArr = productArr.filter((ele) => ele.id == id);
  cartArr = [...cartArr, newArr];
  console.log("Cart Arr", cartArr);
  printCart(cartArr);
};

const fillData = (Data) => {
  const { products } = Data;
  productArr = [...products];
  console.log("Pro", productArr);
  showProducts();
};
const printCart = (cartArr) => {
  cartArr.map((ele, index) => {
    console.log(ele[0]);
    printOneElement(ele[0]);
  });
};

const openPage = (id) => {
  let Item = productArr.filter((ele) => ele.id == id);
  localStorage.setItem("Item", JSON.stringify(Item));
  console.log(Item);
  openProduct();
};
const openProduct = () => {
  window.location.href = "Product.html";
};
const addToCart = (id) => {
  console.log("Add to Cart ", id);
  let newArr = productArr.filter((ele) => ele.id == id);
  cartArr = [...cartArr, newArr];
  localStorage.setItem("cartArr", JSON.stringify(cartArr));
  console.log("Cart Arr", cartArr);

  printCart(cartArr);
};

const showProducts = () => {
  productArr.map((ele) => {
    printCards(ele, openPage, addToCart);
  });
};

const printCards = ({ images, title, rating, price, id }, openPage) => {
  const div = document.createElement("div");
  div.className = "card-div";
  const button = document.createElement("button");
  button.className = "card-but";
  button.onclick = () => openPage(id);
  const imgDiv = document.createElement("div");
  imgDiv.className = "img-div";
  const img = document.createElement("img");
  img.className = "card-img";
  img.src = `${images[0]}`;
  const titleDiv = document.createElement("div");
  titleDiv.className = "title-div";
  const titleHead = document.createElement("h3");
  titleHead.className = "title-head";
  titleHead.innerHTML = title;
  const priceDiv = document.createElement("div");
  priceDiv.className = "price-div";
  const priceHead = document.createElement("h4");
  priceHead.className = "price-head";
  priceHead.innerHTML = `Rs. ${price}`;
  const AdcBut = document.createElement("button");
  AdcBut.className = "AddToCart";
  AdcBut.innerText = "Add to Cart";
  AdcBut.style.marginLeft = "100px";
  AdcBut.onclick = () => addToCart(id);
  priceDiv.appendChild(priceHead);
  titleDiv.appendChild(titleHead);
  imgDiv.appendChild(img);
  button.appendChild(imgDiv);
  div.appendChild(button);
  div.appendChild(titleDiv);
  div.appendChild(priceDiv);
  div.appendChild(AdcBut);
  const section = document.getElementById("products-list");
  section.appendChild(div);
};