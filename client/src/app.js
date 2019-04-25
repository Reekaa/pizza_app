const Pizza = require('./models/pizzas.js');
const SelectPizzaView = require('./views/select_pizza_view.js');
const PizzaView = require('./views/pizza_view.js');
const PriceView = require('./views/price_view.js');


document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded");

const selectPizzaView = new SelectPizzaView();
  selectPizzaView.bindEvents()

const pizzaView = new PizzaView();
pizzaView.bindEvents();

const priceView = new PriceView();
priceView.bindEvents();

const pizzas = new Pizza();
  pizzas.bindEvents()
  pizzas.getData()





});
