
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "CANON G7X3",
    price: 399,
    img:"./img/product/canon g7x3.png",
  },
  {
    id: 2,
    title: "DJI POCKET3",
    price: 599,
    img: "./img/product/dji pocket 3.png",
  },
  {
    id: 3,
    title: "FUJIFILM X100V",
    price: 799,
    img: "./img/product/fujiflimx100v.png",
  },
  {
    id: 4,
    title: "SONY ZV-1 II",
    price: 999,
    img: "./img/product/sony zv-1 ii.png",
  },
  {
    id: 5,
    title: "CANON R50",
    price: 1299,
    img: "./img/product/canon r50.png",
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});