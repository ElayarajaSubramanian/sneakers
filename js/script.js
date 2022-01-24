//Increase/decrease quantity
//1. Get all the elements
const decreaseBtn = document.querySelector(".buttons__quantityminus");
const increaseBtn = document.querySelector(".buttons__quantityplus");
let quantity = document.querySelector(".buttons__quantitycount");
let quantityValue = quantity.innerText;
let quantityNum = Number(quantityValue);
//2. Add event listener to plus and minus buttons
decreaseBtn.addEventListener("click", (e) => {
  if (quantityNum !== 0) {
    quantityNum--;
    quantity.innerText = quantityNum;
  } else {
    return;
  }
});

increaseBtn.addEventListener("click", () => {
  quantityNum++;
  quantity.innerText = quantityNum;
});

//Cart section
const cartBtn = document.querySelector(".cart__icon");
const cartWindow = document.querySelector(".cart__window");
const profileImg = document.querySelector(".profile__img");
cartBtn.addEventListener("click", () => {
  cartWindow.classList.toggle("show");
});
profileImg.addEventListener("click", () => {
  cartWindow.classList.toggle("show");
});

//Hambuger menu
const hamburgerMenu = document.querySelector(".header__menubar");
const nav = document.querySelector(".header__nav");
const closeBtn = document.querySelector(".header__nav__close");

function navToggle() {
  nav.classList.toggle("show");
  cartWindow.classList.remove("show");
}

hamburgerMenu.addEventListener("click", navToggle);
closeBtn.addEventListener("click", navToggle);

// Add to cart
const deleteBtn = document.querySelectorAll(".cart__deletebtn");
const id = Number(document.querySelector("[data-id]"));
const cartQuantity = document.querySelector("[data-cart-quantity]");
const cartItems = document.querySelectorAll(".cart__items");
const checkoutBtn = document.querySelector(".cart__checkoutbtn");
const cartEmptyMsg = document.querySelector(".cart__noitemmsg");
let shoppingCart = [];

if (cartItems.length > 0) {
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let buttonClicked = e.target;
      buttonClicked.parentElement.remove();
    });
  });
} else {
  checkoutBtn.classList.add("hide");
  cartEmptyMsg.classList.add("show");
}
function addToCart(id) {
  const existingItem = shoppingCart.find(id === id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    shoppingCart.push({ id: id });
  }
}

function renderCartItems() {}

/* function noItemsMsg() {
  if (cartItems.length === 0) {
    console.log("It's empty now");
    checkoutBtn.classList.add("hide");
    cartEmptyMsg.classList.add("show");
  } else {
    console.log(cartItems.length);
  }
}
noItemsMsg(); */
