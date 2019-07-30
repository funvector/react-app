import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import classNames from 'classnames';

export default class LoginForm extends Component{
  constructor(props){
    super(props);
    this.rootLogin = {
        rootEmail: 'admin@test.com',
        rootPass: '12345678'
    };
    this.state = {
      redirect: false
    }

    this.logInSbmtHandler = this.logInSbmtHandler.bind(this);
    this.renderRedirect = this.logInSbmtHandler.bind(this);
  }

  inputEmailIsValid    = (event) => this.props.inputEmailIsValid(event.target.value);
  inputPasswordIsValid = (event) => this.props.inputPasswordIsValid(event.target.value);

  renderRedirect(value) {
    this.setState({redirect: `${value}`})
    return (this.getState('redirect')) ? <Redirect to={`/app`} /> : <Redirect to={`/`} />;
  }

  logInSbmtHandler (event){
    event.preventDefault();
    (this.props.getLoginValue.email === this.rootLogin.rootEmail && this.props.getLoginValue.password === this.rootLogin.rootPass) ?
    localStorage.setItem('loginConfirme', true) :
    localStorage.setItem('loginConfirme', false);
    if(localStorage.getItem('loginConfirme') === true){
      this.renderRedirect(true);
    } else {
      this.renderRedirect(false);
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