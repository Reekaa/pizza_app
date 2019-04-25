const PubSub = require('../helpers/pub_sub.js');

class PizzaView{

  constructor(){
    this.container = document.querySelector('#display-pizza')
  }

  bindEvents(){
    PubSub.subscribe("Pizza:pizza-selection-ready", (event) => {
      const pizza = event.detail;
      console.log(pizza);
      this.displayPizza(pizza);
    })
  }

  displayPizza(pizza){
    const image = document.createElement('img');
    image.src = `images/${pizza.image_url}`;
    // image.classList.add("");

    const name = document.createElement('p');
    name.textContent = pizza.name;
    // name.classList.add("");

    // const toppingsUL = document.createElement('ul');
    // const toppings = pizza.toppings;
    // toppings.forEach((topping) => {
    //   const toppingLI = document.createElement('li');
    //   toppingLI.textContent = topping;
    //   toppingsUL.appendChild(topping);
    // });

    this.container.appendChild(image);
    this.container.appendChild(name);
    // this.container.appendChild(toppingsUL);

  }

}
module.exports = PizzaView;
