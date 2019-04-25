const PubSub = require('../helpers/pub_sub.js');

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
      console.log(selectIndex);
      PubSub.publish("Pizza:change-pizza", selectIndex)
    })
  }

//creates option/dropdown menu displaying pizza name
//and sets value as the pizza index
  selectPizzaList(pizzaData){
    const empty = this.addEmptyOption();
    this.element.appendChild(empty)
    pizzaData.forEach((pizza, index)=>{
      const option = document.createElement('option');
      option.textContent = pizza.name;
      option.value = index;
      this.element.appendChild(option)
    });
  }

  addEmptyOption() {
    const emptyOption = document.createElement('option');
    emptyOption.selected = "disabled";
    return emptyOption;
  };

}

module.exports = SelectPizzaView;
