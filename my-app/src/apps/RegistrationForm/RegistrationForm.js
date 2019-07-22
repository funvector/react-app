import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class RegistrationForm extends Component{

  render() {
    
    return (
      <Fragment>
        <form>
          <fieldset>
            <legend className='regFormLegend'>WELL HELLO THERE</legend>
            <label>
            <h4 className='regFormh4'>ENTER YOUR EMAIL</h4>
              <input type='email' className='inp' />
            </label>
            <label>
            <h4 className='regFormh4'>ENTER YOUR PASSWORD</h4>
              <input type='password' className='inp' />
            </label>
            <Link to='/app'>
              <button type='button' className='btn' disabled={false}>LOG IN</button>
            </Link>
          </fieldset>
        </form>
      </Fragment>
    )
  }
}