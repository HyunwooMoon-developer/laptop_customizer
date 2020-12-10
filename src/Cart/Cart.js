/* eslint-disable no-unused-vars */
import React from 'react';
import CartSummary from './CartSummary';
import CartTotal from './CartTotal';

class Cart extends React.Component{
    render(){
        

        
        return(
            <section className="main__summary">
                 <h2>Your cart</h2>
             <CartSummary selected={this.props.selected}/>
             <CartTotal selected={this.props.selected} />
            </section>
        )
    }
}

export default Cart;