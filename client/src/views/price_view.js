class Price{

  constructor(){
  this.container = document.querySelector('#display-price;');

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
    const orderPrice = document.createElement('h2');
    orderPrice.textContent = pizza.price * pizzaSize;
    console.log(orderPrice);
}

}

module.exports = Price;
