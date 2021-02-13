

import React, { Component } from 'react'
import Aux from '../../hoc/Aux1'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7

}
class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  }
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const upgradeCount = oldCount + 1;
    const upgradeIngredients = { ...this.state.ingredients };
    upgradeIngredients[type] = upgradeCount;

    const PricesAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + PricesAddition;
    this.setState({ totalPrice: newPrice, ingredients: upgradeIngredients });

  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount<=0){
      return;
    }
    const upgradeCount = oldCount - 1;
    const upgradeIngredients = { ...this.state.ingredients };
    upgradeIngredients[type] = upgradeCount;

    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: upgradeIngredients });

  }

  render() {
    const disabledInfo ={
      ...this.state.ingredients
    }
    for(let key in disabledInfo){
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredienAdded={this.addIngredientHandler} 
         ingredientRemoved={this.removeIngredientHandler}
         disabled={disabledInfo}
         price={this.state.totalPrice}/>
      </Aux>
    );
  }

}

export default BurgerBuilder;