import React from 'react';
export default function Car(props) {
  
    const classes =['card'];
    if(props.car.marked){
      classes.push('marked')
    }
  
    return (
      <div className={classes.join(' ')} onClick={props.onMark}>
        <div className='card-img'>
          <img 
            src={props.car.img} 
            alt={props.car.name} />
          </div>
          <h3>{props.car.name}</h3>
          <p>{props.car.price} $</p>
        </div>
      );
    };