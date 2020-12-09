/* eslint-disable no-unused-vars */
import React from 'react';
import slugify from 'slugify'
import Form from './Form';
import Cart from './Cart';

const Main = function(props){

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'})


        const features = Object.keys(props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = props.features[feature].map(item => {
              const itemHash = slugify(JSON.stringify(item));
              return (
                <div key={itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === props.selected[feature].name}
                    onChange={e => props.updateFeature(feature, item)}
                  />
                  <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                  </label>
                </div>
              );
            });
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
          });
      
          const summary = Object.keys(props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = props.selected[feature];
      
            return (
              <div className="summary__option" key={featureHash}>
                <div className="summary__option__label">{feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            );
          });
      
          const total = Object.keys(props.selected).reduce(
            (acc, curr) => acc + props.selected[curr].cost,
            0
          );
      
        return(
            <main>
            <Form features={features}/>
            <Cart summary={summary} total={total} USCurrencyFormat={USCurrencyFormat}/>
          </main>
        )
    }


export default Main;