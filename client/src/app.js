const Pizza = require('./models/pizzas.js');
const SelectPizzaView = require('./views/select_pizza_view.js');
const PizzaView = require('./views/pizza_view.js');


document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded");

const pizzas = new Pizza();
pizzas.bindEvents()
pizzas.getData()

const selectPizzaView = new SelectPizzaView();
selectPizzaView.bindEvents()


});
