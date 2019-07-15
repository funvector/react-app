import React from 'react';
import classNames from 'classnames';
import { isMarked } from './../../redux-app/selectors'

export default class CarsList extends React.Component{
  
  render() {

    let cardClassMarked = classNames('card effect8', this.props.className, {
      'card-marked': isMarked,
      'card effect8': !isMarked
    });

    return this.props.cars.map((car) => (
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
        )
      )
    }
  }