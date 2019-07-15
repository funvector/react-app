import React from 'react';
import classNames from 'classnames';

export default class CarsList extends React.Component{
  
  render() {

    return this.props.cars.map((car) => {

      let cardClassMarked = classNames('card effect8', this.props.className, {
        'card-marked': car.marked
      });
      
      return (
        <div className={cardClassMarked} key={car.id} onClick={() => this.props.handleMarked(car.id)}>
          <div className='card-img'>
            <img 
              src={car.img}
              alt={car.model}
            />
            </div>
            <h3>{car.model}</h3>
            <p>{car.price} $</p>
          </div>
        )}
      )
    }
  }