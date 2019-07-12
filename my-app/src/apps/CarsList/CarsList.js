import React from 'react';

export default class CarsList extends React.Component{
  
  render() {
    return this.props.cars.map((car) => (
        <div className='card effect8' key={car.id}>
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