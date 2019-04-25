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

      this.element.addEventListener('change', (event) => {
      const selectIndex = event.target.value;
      PubSub.publish("Pizza:change-pizza", selectIndex)
    })
  }

//
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
