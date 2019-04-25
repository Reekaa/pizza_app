class PizzaView{

  constructor(){
    this.container = document.querySelector('#display-pizza')
  }

  bindEvents(){
    PubSub.subscribe("pizza:pizza-selection-ready", (event) => {
      const pizza = event.detail;
      this.displayPizza(pizza);
    })
  }

  displayPizza(pizza){
    const image = document.createElement('img');
    image.src = pizza.image;
    image.classList.add("");

    const description = document.createElement('p');
    description.textContent = pizza.description;
    description.classList.add("");

    const toppingsUL = document.createElement('ul');
    const toppings = pizza.toppings;
    toppings.forEach((topping) => {
      const toppingLI = document.createElement('li');
      toppingLI.textContent = topping;
      toppingsUL.appendChild(topping);
    });

    this.container.appendChild(image);
    this.container.appendChild(description);
    this.container.appendChild(toppingsUL);

  }

}
module.exports = PizzaView;
