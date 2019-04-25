class SelectPizzaView{

  constructor(){
    this.element = document.querySelector('#pizza-list');
  }

//subscribes to pizza.js to recieve all pizza data
//then passes data into selectPizzaList() as argument
  bindEvents(){
    PubSub.subscribe("Pizzas:pizza-data-loaded", (event) => {
      const allPizzas = event.detail;
      this.selectPizzaList(allPizzas);
    })
//listens for change in pizza selection from dropdown list and
//publishes the index of the new pizza back to pizza.js
      this.element.addEventListener('change', (event) => {
      const selectIndex = event.target.value;
      PubSub.publish("Pizza:change-pizza", selectIndex)
    })
  }

//creates option/dropdown menu displaying pizza name
//and sets value as the pizza index
  selectPizzaList(pizzaData){
    pizzaData.forEach(pizza, index)=>{
      const option = document.createElement('option');
      option.textContent = pizza.name;
      option.value = index;
      this.element.appendChild(option)
    }
  }
}

module.exports = SelectPizzaView;
