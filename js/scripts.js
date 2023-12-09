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
window.addEventListener("load", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const pizzaSize = document.getElementById("size").value;
    const pizzaToppings = Array.from(document.getElementById("toppings").selectedOptions).map(option => option.value);
    const pizza = new CustomPizza(pizzaSize, pizzaToppings);

    document.getElementById('displaySize').textContent = size;
    document.getElementById('displayToppings').textContent = toppings;
    document.getElementById('displayPrice').textContent = pizza.calculatePrice();

    document.getElementById("pizzaDetails").removeAttribute("class");
  })
})
