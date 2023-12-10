# Josephinos Pizzaria

#### By Joseph McMahon

#### Application that allows user to order a pizza with custom size and toppings and calculate the price based on the user selections 

## Technologies Used

* HTML
* CSS
* JS
* Web API
* Git Hub


## Description

This website allows user to order a pizza (small, medium, or large) and choose toppings from the toppings list. Once the size of the pizza and all desired toppings are selected, it will calculate the price of your pizza based on the size and toppings seleted. Each additional topping will increase the total price of the pizza by one dollar. 
## Setup/Installation Requirements

1. Clone the repository to your local machine: 
Git Clone
2. Navigate to the topmost directory Portfolio:
cd josephinos_pizzaria
3. Open the files in Virtual studio:
code .
4. Open index.html file with live server

Or access application in web browser at: 
https://jmcmahon01.github.io/Josephino-s-Pizzaria

## Tests
Describe: CustomPizza()

Test: "It should return a custom pizza object with properties: size and toppings"
Code: const testPizza = new CustomPizza("large", ["pepperoni", "pineapple", "jalapeńo"]);
Expected Output: CustomPizza {size: "large", toppings: ["pepperoni", "pineapple", "jalapeńo"]}

Describe: : calculatePrice()

Test: "prototype method should calculate the price of the pizza based on which size is selected: small: 10, medium: 15, or large: 20"
Code: const testPizza = new CustomPizza(size: "medium", toppings: [ "cheese" ]);
      testPizza.calculatePrice(); 
Expected Output:15

Test: "method should now take into account size and add 1 dollar per topping selected"
Code: const testPizza = new CustomPizza ("large", ["cheese", "pepperoni", "pineapple", "jalapeńo"]);
Expected Output: 24
















## Known Bugs
* No known bugs at this time


## License
Copyright © Joseph McMahon 2023
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
