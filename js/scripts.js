//Business Logic
function CustomPizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}
CustomPizza.prototype.calculatePrice = function () {
  let basePrice = 0;
  if (this.pizzaSize === "small") {
    basePrice = 10;
  } else if (this.pizzaSize === "medium") {
    basePrice = 15;
  } else if (this.pizzaSize === "large") {
    basePrice = 20;
  }
  let toppingsCost = 0;
  if (this.pizzaToppings.length > 0) {
    toppingsCost = this.pizzaToppings.length;
  }
  const totalPrice = basePrice + toppingsCost;
  return totalPrice;
}

//UI Logic
window.addEventListener("load", function() {
  
})
