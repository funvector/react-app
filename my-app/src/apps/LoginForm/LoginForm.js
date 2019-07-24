import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component{

  inputAddEmailHandler    = (event) => this.props.inputAddEmailHandler(event.target.value.trim());
  inputAddPasswordHandler = (event) => this.props.inputAddPasswordHandler(event.target.value.trim());
  logInSbmtHandler        = (event) => this.props.logInSbmtHandler(event);

  render() {

    const { getLoginValue } = this.props;
    
    return (
      <Fragment>
        <form>
          <fieldset>
            <legend className='regFormLegend'>WELL HELLO THERE</legend>
            <label>
            <h4 className='regFormh4'>ENTER EMAIL</h4>
              <input type='email' className='inp' onChange={this.inputAddEmailHandler} placeholder='email: admin@test.com' value={getLoginValue.email}/>
            </label>
            <label>
            <h4 className='regFormh4'>ENTER PASSWORD</h4>
              <input type='password' className='inp' onChange={this.inputAddPasswordHandler} placeholder='8+ symbols (without spaces)' value={getLoginValue.password}/>
            </label>
            <Link to='/app'>
              <button type='button' className='btn' onClick={this.logInSbmtHandler} disabled={!getLoginValue.password || !getLoginValue.email || getLoginValue.email.indexOf('@') === -1 || getLoginValue.password.length < 8}>LOG IN</button>
            </Link>
          </fieldset>
        </form>
      </Fragment>
    )
  }
}