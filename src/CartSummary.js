import React from 'react';

class CartSummary extends React.Component{
    render(){
        return(
            <>
                 <h2>Your cart</h2>
              {this.props.summary}
            </>
        )
    }
}

export default CartSummary;