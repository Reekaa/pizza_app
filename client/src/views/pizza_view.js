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
    this.container.innerHTML = ' ';
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

    const buttons = this.createButtons();

    const voteButton = this.createVoteButton();
    this.container.appendChild(voteButton);
  }

  createButtons(){
    const button1 = document.createElement('button');
    button1.multiplier = 1;
    button1.textContent = 'Small';

    const button2 = document.createElement('button');
    button2.multiplier = 1.5;
    button2.textContent = 'Medium';

    const button3 = document.createElement('button');
    button3.multiplier = 2;
    button3.textContent = 'Large';

    const buttons = [button1, button2, button3];
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        PubSub.publish('PizzaView:size-button-click', button.multiplier);
      });
    });

    this.container.appendChild(button1);
    this.container.appendChild(button2);
    this.container.appendChild(button3);
  }

  createVoteButton() {
    const voteButton = document.createElement('button');
    voteButton.textContent = 'Love it!';
    voteButton.style.float = "right"
    voteButton.addEventListener('click', (event) => {
      PubSub.publish('PizzaView:vote-button-click');
    });
    return voteButton;
  };

}
module.exports = PizzaView;
