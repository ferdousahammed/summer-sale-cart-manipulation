let cartItemNum = 0;
let totalPrice = 0;
const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.addEventListener("click", () => {
    cartItemNum += 1;
    const title = card.querySelector("h3").innerText;
    const price = parseFloat(
      card.querySelector("span").innerText.split(" ")[1]
    );
    const titleContainer = document.getElementById("title-container");
    const cartItems = document.createElement("p");
    cartItems.innerText = `${cartItemNum}. ${title} - $${price.toFixed(2)}`;
    titleContainer.appendChild(cartItems);
    totalPrice += price;
    setInnerTextById("totalPrice", totalPrice.toFixed(2));
    setInnerTextById("total", totalPrice.toFixed(2));
  });
}

document.getElementById("apply-btn").addEventListener("click", () => {
  const coupon = document
    .getElementById("input-field")
    .value.split(" ")
    .join("")
    .toUpperCase();
  document.getElementById("input-field").value = "";
  if (totalPrice >= 200) {
    if (coupon === "SELL200") {
      discountedPrice = totalPrice * 0.2;
      setInnerTextById("discountPrice", discountedPrice.toFixed(2));
      const updatedTotalPrice = totalPrice - discountedPrice;
      setInnerTextById("total", updatedTotalPrice.toFixed(2));
    } else {
      setInnerTextById("discountPrice", 0);
      setInnerTextById("total", totalPrice.toFixed(2));
      alert("Please enter correct coupon code");
    }
  } else {
    alert("Less that $200. Please add more products.");
  }
});

function getInnerTextById(id) {
  return document.getElementById(id).innerText;
}
function setInnerTextById(id, innerText) {
  document.getElementById(id).innerText = innerText;
}
