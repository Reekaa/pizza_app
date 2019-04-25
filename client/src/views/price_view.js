const PubSub = require('../helpers/pub_sub.js');

class Price{

  constructor(){
  this.container = document.querySelector('#display-price');

  }

  bindEvents(){
    PubSub.subscribe("Pizza:pizza-selection-ready", (event) => {
      const pizza = event.detail;
    PubSub.subscribe("PizzaView:size-button-click", (event) =>{
        const pizzaSize = event.detail;
        this.displayPrice(pizza,pizzaSize);

      })
    })
  }

  displayPrice(pizza, pizzaSize =1){
    this.container.textContent = `£${pizza.price * pizzaSize}`;
}

}

module.exports = Price;
