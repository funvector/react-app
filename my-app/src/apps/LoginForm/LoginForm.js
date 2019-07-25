import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component{

  inputAddEmailHandler    = (event) => this.props.inputAddEmailHandler(event.target.value);
  inputAddPasswordHandler = (event) => this.props.inputAddPasswordHandler(event.target.value);
  logInSbmtHandler        = (event) => this.props.logInSbmtHandler(event);
  inputPasswordIsValid    = () => this.props.inputPasswordIsValid();
  inputEmailIsValid       = () => this.props.inputEmailIsValid();

  render() {

    const { getLoginValue } = this.props;
    console.log(getLoginValue);
    
    return (
      <Fragment>
        <form>
          <fieldset>
            <legend className='regFormLegend'>WELL HELLO THERE</legend>
            <label>
            <h4 className='regFormh4'>ENTER EMAIL</h4>
              <input type='email' className='inp' onChange={this.inputAddEmailHandler} onBlur={this.inputEmailIsValid} placeholder='email: admin@test.com' value={getLoginValue.email}/>
            </label>
            <label>
            <h4 className='regFormh4'>ENTER PASSWORD</h4>
              <input type='password' className='inp' onChange={this.inputAddPasswordHandler} onBlur={this.inputPasswordIsValid} placeholder='8+ symbols (without spaces)' value={getLoginValue.password}/>
            </label>
            <Link to='/app'>
              <button type='submit'
                className='btn btn-regFormLogin'
                onClick={this.logInSbmtHandler}
                disabled={getLoginValue.password === false  && getLoginValue.email === false}>
                  LOG IN
              </button>
            </Link>
          </fieldset>
        </form>
      </Fragment>
    )
  }
}