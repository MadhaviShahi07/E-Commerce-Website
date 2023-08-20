window.addEventListener("load", bindEvents);

let image = document.getElementById("image");
let data = document.getElementById("data");
console.log(image, data);

function bindEvents() {
  let Item = JSON.parse(localStorage.getItem("Item"));
  console.log("Item is", Item);
  addItem(Item);
}

const addItem = (Item) => {
  const { images, title, rating, price, id } = Item[0];
  const img = document.createElement("img");
  img.className = "product-img";
  img.src = `${images[1]}`;
  const titlediv = document.createElement("div");
  titlediv.className = "pro-title-div"; 
  const titleHead = document.createElement("h2");
  titleHead.className = "pro-title-head";
  titleHead.innerHTML = title;
  titlediv.appendChild(titleHead);
  const priceDiv = document.createElement("div");
  priceDiv.className = "pro-price-div";
  const pricehead = document.createElement("h3");
  pricehead.className = "pro-price-head";
  pricehead.innerHTML = `Rs. ${price}`;
  const button = document.createElement("button");
  button.className = "pro-but";
  button.innerHTML = "Checkout";
  priceDiv.appendChild(pricehead);
  image.appendChild(img);
  data.appendChild(titlediv);
  data.appendChild(priceDiv);
  data.appendChild(button);
};