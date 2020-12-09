import React from 'react';

class CartTotal extends React.Component{
    render(){
        return(
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                  {this.props.USCurrencyFormat.format(this.total)}
                </div>
              </div>
        )
    }
}

export default CartTotal;