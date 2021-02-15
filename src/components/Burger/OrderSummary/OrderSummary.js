
import React from 'react'
import Aux from '../../../hoc/Aux1'
import Button from '../../UI/Button/Button'


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
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
};
export default orderSummary;