const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


class Pizza {

  constructor(){
    this.data = [];
  }

  bindEvents(){
    //takes pizza index from users selection
    //then finds the pizza by index and publishes to pizza_view.js
    PubSub.subscribe("Pizza:change-pizza", (event)=>{
      const newPizzaIndex = event.detail;
      const newPizza = this.data[newPizzaIndex];
      PubSub.publish("Pizza:pizza-selection-ready", newPizza)
    });

    PubSub.subscribe("PizzaView:vote-button-click", (event) => {
      // TODO
    });
  }
  //gets data from backend and publishes pizza data
  getData(){
    const url = 'http://localhost:3000/pizzas'
    const request = new RequestHelper(url);
    request.get()
    .then((data)=>{
      this.data = data;
      PubSub.publish("Pizzas:pizza-data-loaded", this.data);
    })
    .catch((message) =>{
      console.error(message);
    })
  }

  addVote(id){
    const url = 'http://localhost:3000/pizzas'
    const request = new RequestHelper(url);
    request.get()
    .then((data)=>{
      this.data = data;
      PubSub.publish("Pizzas:pizza-data-loaded", this.data);
    })
    .catch((message) =>{
      console.error(message);
    })
  }


}

module.exports = Pizza;
