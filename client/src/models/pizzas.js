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
      const newPizzaIndex = event.details;
      console.log(newPizzaIndex);
      const newPizza = this.data[newPizzaIndex];
      PubSub.publish("pizza:pizza-selection-ready", newPizza)
    })
  }
  //gets data from backend and publishes pizza data
  getData(){
    const url = 'http://localhost:3000/pizza'
    const request = new requestHelper(url);
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
