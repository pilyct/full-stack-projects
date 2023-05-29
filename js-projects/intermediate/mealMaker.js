/*
Project: Meal Maker

A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. 
Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors!
*/

const menu = {
    _meal: '',
    _price: 0,
    // Setter: MEAL
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      } else {
        console.log('Error message. You need to pass a real string value');
      }
    },
    // Setter: PRICE
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      } else {
        console.log('Error message. You need to pass a real numeric value');
      }
    },
    // Getter
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's Special is ${this._meal} for ${this._price}€`;
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  };
  
  /* These values are to test the setters
  menu._meal = 3;
  menu._price = 'two';
  console.log(menu._price);*/
  
  // Reassign key-values
  menu.meal = 'french omelette'
  menu.price = 4.5
  
  // Check setters  
  console.log(menu);
  console.log(menu._meal);
  
  // Getter value
  console.log(menu.todaysSpecial);
  menu.todaysSpecial;