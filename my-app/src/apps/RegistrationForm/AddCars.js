import React, { Component, Fragment } from 'react';

export default class AddCars extends Component{

  render() {
    
    return (
      <Fragment>
        <form>
          <label>
          <h3></h3>
            <input type='text' className='inp' />
          </label>
          <label>
          <h3></h3>
            <input type='text' className='inp' />
          </label>
          <label>
          <h3></h3>
            <input type='text' className='inp' />
          </label>
            <button type='button' className='btn' ></button>
        </form>
      </Fragment>
      )
    }
  }