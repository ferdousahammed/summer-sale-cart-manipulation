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

function getInnerTextById(id) {
  return document.getElementById(id).innerText;
}
function setInnerTextById(id, innerText) {
  document.getElementById(id).innerText = innerText;
}
