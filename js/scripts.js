function CustomPizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
}
CustomPizza.prototype.calculatePrice =function() {
  let basePrice = 0;
  if (this.pizzaSize === "small") {
    return basePrice + 10;
  } else if (this.pizzaSize === "medium") {
    return basePrice + 15;
  } else if (this.pizzaSize === "large") {
    return basePrice + 20;
  } else {
    return basePrice
  }
}