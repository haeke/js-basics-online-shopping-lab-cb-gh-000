var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var cartObject = {[item]: Math.floor((Math.random() * 100) + 1) };
 cart.push(cartObject);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if (cart.length <= 0) {
    console.log('Your shopping cart is empty.');
  }

  var itemsWithPrices = [];
  for (var i = 0; i < cart.length; i++) {
    var itemNames = Object.keys(cart[i]);
    var itemName = itemNames[0];
    var itemPrice = cart[i][itemName];

    itemWithPrices.push(`${itemName} at $${itemPrice}`);
  }
  var itemwithPricesLen = itemWithPrices.length;
  switch (itemwithPricesLen) {
    case 1:
      console.log(`In your cart, you have ${itemsWithPrices.join().}`);
      break;
    case 2:
      console.log(`In your cart, you have ${itemsWithPrices[0]} and ${itemWithPrices.slice(-1)}.`);
      break;
    default:
      return console.log(`In your cart, you have ${itemWithPrices.slice(0, -1).join(', ')} and ${itemsWithPrices.slice(-1)}`);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
