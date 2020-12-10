/* eslint-disable no-unused-vars */
import React from 'react';
import FormList from './FormList';

function Form(props) {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <FormList
          featureList={props.featureList}
          selected={props.selected}
          onItemChange={props.onItemChange}
        />
      </form>
    );
  }
 

export default Form;