
import React from 'react'
import Aux from '../../../hoc/Aux1'


const orderSummary = (props) => {
    const ingredientSummury = Object.keys(props.ingredients).map(
        igKey => {
            return <li>{igKey}:{props.ingredients[igKey]}</li>
        }
    )
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger withe the following ingredients</p>
            <ul>
                {ingredientSummury}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
};
export default orderSummary;