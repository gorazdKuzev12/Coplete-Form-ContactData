
import React, { Component } from 'react'
import Aux from '../../../hoc/Aux1'
import Button from '../../UI/Button/Button'


class OrderSummary extends Component {
  
    render(){
        const ingredientSummury = Object.keys(this.props.ingredients).map(
            igKey => {
                return <li>{igKey}:{this.props.ingredients[igKey]}</li>
            }
        )
        return( <Aux>
            <h3>Your order</h3>
            <p>A delicious burger withe the following ingredients</p>
            <ul>
                {ingredientSummury}
            </ul>
        <p><strong>Total Price:{this.props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
        </Aux>);
    }
}

export default OrderSummary;