import React from 'react';

export default class CarsList extends React.Component{
  render() {
    return this.props.cars.map((car) => (
        <div className='card' key={car.id}>
          <div className='card-img'>
            <img 
              src={car.img} 
              alt={car.name} />
            </div>
            <h3>{car.name}</h3>
            <p>{car.price} $</p>
          </div>
        )
      )
    }
  }