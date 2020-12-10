import React from 'react';
import slugify from 'slugify';
import FormItem from './FormItem';

function FormList(props){
    return Object.keys(props.featureList).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = props.featureList[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
          <FormItem
          itemHash={itemHash}
          key={itemHash}
          feature={feature}
          item={item}
          checked={item.name===props.selected[feature].name}
          onItemChange={props.onItemChange}
          
          />
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
        })

    }

    export default FormList;