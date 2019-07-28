import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default class LoginForm extends Component{

  inputEmailIsValid    = (event) => this.props.inputEmailIsValid(event.target.value);
  inputPasswordIsValid = (event) => this.props.inputPasswordIsValid(event.target.value);
  logInSbmtHandler     = () => this.props.logInSbmtHandler();

  render() {

    const { getLoginValue } = this.props;
    let checkValidEmail = classNames('loginFormIsValid', this.props.className, {
      'notValidEmail': getLoginValue.emailIsValid === false
    });

    let checkValidPass = classNames('loginFormIsValid', this.props.className, {
      'notValidPass': getLoginValue.passwordIsValid === false
    });
    
    return (
      <Fragment>
        <form>
          <fieldset>
            <legend className='regFormLegend'>WELL HELLO THERE</legend>
            <label>
            <h4 className='regFormh4'>ENTER EMAIL</h4>
              <input type='email' className='inp' onChange={this.inputEmailIsValid} placeholder='email: admin@test.com' value={getLoginValue.email}/>
              <p className={checkValidEmail}>
                enter correct email
              </p>
            </label>
            <label>
            <h4 className='regFormh4'>ENTER PASSWORD</h4>
              <input type='password' className='inp' onChange={this.inputPasswordIsValid} placeholder='8+ symbols (without spaces)' value={getLoginValue.password}/>
              <p className={checkValidPass}>
                enter correct password
              </p>
            </label>
            <Link to='/app'>
              <button 
                type='submit' 
                className='btn btn-regFormLogin' 
                onClick={this.logInSbmtHandler} 
                disabled={(getLoginValue.emailIsValid === false || getLoginValue.passwordIsValid === false)? true : false}>
                  LOG IN
              </button>
            </Link>
          </fieldset>
        </form>
      </Fragment>
    )
  }
}