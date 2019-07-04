import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class AddCars extends Component{
  constructor(props){
    super(props);
    this.carsData = {};
  }

  // addCarsHandler = () => this.props.addCarsHandler();
  // inputAddLinkHandler = () => this.props.inputAddLinkHandler();
  // inputAddModelHandler = () => this.props.inputAddModelHandler();
  // inputAddPriceHandler = () => this.props.inputAddPriceHandler();

  render() {
    return (
      <Fragment>
        <form>
          <label>
          <h3>ADD LINK TO IMG</h3>
            <input type='text' className='inp' onChange={this.inputAddLinkHandler} />
          </label>
          <label>
          <h3>ADD MODEL</h3>
            <input type='text' className='inp' onChange={this.inputAddModelHandler} />
          </label>
          <label>
          <h3>ADD PRICE</h3>
            <input type='text' className='inp' onChange={this.inputAddPriceHandler} />
          </label>
          <button type='button' className='btn btn-add_cars' onClick={this.addCarsHandler}>Add</button>
        </form>
        <Link to='../../App.js'>TO MAIN PAGE</Link>
      </Fragment>
      )
    }
  }