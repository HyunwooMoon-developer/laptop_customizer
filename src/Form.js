import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <form className="main__form">
              <h2>Customize your laptop</h2>
              {this.props.features}
            </form>
        )
    }
}

export default Form;