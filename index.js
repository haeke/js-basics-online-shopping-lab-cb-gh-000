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
  if (!cart.length) {
    return console.log('Your shopping cart is empty.');
  }

  const itemsWithPrices = [];

  for (let i = 0; i < cart.length; i++) {
    var itemNames = Object.keys(cart[i]);
    var itemName = itemNames[0];
    var itemPrice = cart[i][itemName]

    itemsWithPrices.push(`${itemName} at $${itemPrice}`)
  }

  var itemwithPricesLen = itemWithPrices.length;
  switch (itemwithPricesLen) {
    case 1:
      console.log(`In your cart, you have ${itemsWithPricesLen.join()}.`);
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
  var totalcost = 0;
  for (var i = 0; i < cart.length; i++) {
    var itemNames = Object.keys(cart[i]);
    var itemName = itemNames[0];
    totalcost += parseInt(cart[i][itemName], 10);
  }

  return totalcost;
}

function removeFromCart(item) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      return cart.splice(i, 1);
    }
  }

  return console.log('That item is not in your cart.');
}

function placeOrder(cardNumber) {
  // write your code here
}
