import { Link } from 'react-router-dom';
import React, { Component, Fragment } from 'react';

export default class AddCars extends Component{

  onLinkChange         = (event) => this.props.onLinkChange(event.target.value);
  inputAddModelHandler = (event) => this.props.inputAddModelHandler(event.target.value);
  inputAddPriceHandler = (event) => this.props.inputAddPriceHandler(event.target.value);
  addCarsHandler       = () => this.props.addCarsHandler();

  render() {
    const { addCars } = this.props;
    
    return (
      <Fragment>
        <Link to='/' className='btn-regFormLogout'>LOG OUT</Link>
        <form>
          <label>
          <h3>ADD LINK TO IMG</h3>
            <input type='text' className='inp' onChange={this.onLinkChange} value={addCars.img} />
          </label>
          <label>
          <h3>ADD MODEL</h3>
            <input type='text' className='inp' onChange={this.inputAddModelHandler} value={addCars.model} />
          </label>
          <label>
          <h3>ADD PRICE</h3>
            <input type='text' className='inp' onChange={this.inputAddPriceHandler} value={addCars.price} />
          </label>
          <Link to='/app'>
            <button type='button' className='btn btn-add_cars' onClick={this.addCarsHandler} disabled={!addCars.img || !addCars.model || !addCars.price}>Add</button>
          </Link>
        </form>
        <Link to='/app'>TO MAIN PAGE</Link>
      </Fragment>
      )
    }
  }