import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const rootLogin = {
  rootEmail: 'admin@test.com',
  rootPass: '12345678'
};

export default class LoginForm extends Component{

  inputEmailIsValid    = (event) => this.props.inputEmailIsValid(event.target.value);
  inputPasswordIsValid = (event) => this.props.inputPasswordIsValid(event.target.value);
  logInSbmtHandler     = (event) =>{
    if(this.props.getLoginValue.password === rootLogin.rootPass && this.props.getLoginValue.email === rootLogin.rootEmail){
      localStorage.setItem('loginConfirm', JSON.stringify({session: {isLoggedUser: true, loginDateTime: new Date()}}));
    } else {
      event.preventDefault();
      if(this.props.getLoginValue.password !== rootLogin.rootPass && this.props.getLoginValue.email !== rootLogin.rootEmail){
        alert('INCORRECT PASSWORD and EMAIL');
      } else if(this.props.getLoginValue.password !== rootLogin.rootPass){
        alert('INCORRECT PASSWORD');
      } else {
        alert('INCORRECT EMAIL');
      }
    }
  }

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
            <h3 className='regFormh3'>ENTER EMAIL</h3>
              <input type='email' className='inp' onChange={this.inputEmailIsValid} placeholder='email: admin@test.com' value={getLoginValue.email}/>
              <p className={checkValidEmail}>
                Email is invalid
              </p>
            </label>
            <label>
            <h3 className='regFormh3'>ENTER PASSWORD</h3>
              <input type='password' className='inp' onChange={this.inputPasswordIsValid} placeholder='8+ symbols (without spaces)' value={getLoginValue.password}/>
              <p className={checkValidPass}>
                This field is required
              </p>
            </label>
            <Link to='/app'>
              <button 
                type='submit' 
                className='btn btn-regFormLogin' 
                onClick={this.logInSbmtHandler}
                disabled={(getLoginValue.emailIsValid === false || getLoginValue.passwordIsValid === false) ? true : false}>
                  LOG IN
              </button>
            </Link>
          </fieldset>
        </form>
      </Fragment>
    )
  }
}