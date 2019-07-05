import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class AddCars extends Component{

  inputAddLinkHandler = (event) => this.props.inputAddLinkHandler(event.target.value);
  inputAddModelHandler = (event) => this.props.inputAddModelHandler(event.target.value);
  inputAddPriceHandler = (event) => this.props.inputAddPriceHandler(event.target.value);
  addCarsHandler = () => this.props.addCarsHandler();

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
          <button type='submit' className='btn btn-add_cars' onClick={this.addCarsHandler}>Add</button>
        </form>
        <Link to='../../App.js'>TO MAIN PAGE</Link>
      </Fragment>
      )
    }
  }