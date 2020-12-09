import React from 'react';
import CartSummary from './CartSummary';
import CartTotal from './CartTotal';

class Cart extends React.Component{
    render(){
        return(
            <section className="main__summary">
             <CartSummary summary={this.props.summary}/>
             <CartTotal USCurrencyFormat={this.props.USCurrencyFormat} total={this.props.total}/>
            </section>
        )
    }
}

export default Cart;