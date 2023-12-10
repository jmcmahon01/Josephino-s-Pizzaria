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
  const pizzaDetails = document.getElementById('pizzaDetails');
  const collapsibles = document.querySelectorAll('.collapsible');
  collapsibles.forEach(function (collapsible) {
    const listId = collapsible.querySelector('ul').id;
    const list = document.getElementById(listId);
    list.style.display = 'none';

    collapsible.addEventListener('click', function () {
      list.style.display = list.style.display === 'none' ? 'block' : 'none';
    });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const pizzaSize = document.getElementById("size").value;
    const pizzaToppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(checkbox => checkbox.value);
    const pizza = new CustomPizza(pizzaSize, pizzaToppings);

    document.getElementById('displaySize').textContent = pizzaSize;
    document.getElementById('displayToppings').textContent = pizzaToppings.join(", ");
    document.getElementById('displayPrice').textContent = pizza.calculatePrice();

    document.getElementById("pizzaDetails").removeAttribute("class");

    pizzaDetails.scrollIntoView({ behavior: 'smooth' });

    document.getElementById('resubmitButton').addEventListener('click', function () {
      document.querySelector("form").reset();
      document.getElementById('pizzaDetails').setAttribute("class", "hidden");
      document.body.scrollIntoView({ behavior: 'smooth' });
    });
  })
})

