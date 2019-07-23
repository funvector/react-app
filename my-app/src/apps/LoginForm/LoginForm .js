import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component{

  inputAddEmailHandler    = (event) => this.props.inputAddEmailHandler(event.target.value);
  inputAddPasswordHandler = (event) => this.props.inputAddPasswordHandler(event.target.value);
  logInSbmtHandler        = (event) => this.props.logInSbmtHandler(event);

  render() {

    const { getLogin } = this.props;
    
    return (
      <Fragment>
        <form>
          <fieldset>
            <legend className='regFormLegend'>WELL HELLO THERE</legend>
            <label>
            <h4 className='regFormh4'>ENTER YOUR EMAIL</h4>
              <input type='email' className='inp' onChange={this.inputAddEmailHandler} value={getLogin.email}/>
            </label>
            <label>
            <h4 className='regFormh4'>ENTER YOUR PASSWORD</h4>
              <input type='password' className='inp' onChange={this.inputAddPasswordHandler} value={getLogin.password}/>
            </label>
            <Link to='/app'>
              <button type='button' className='btn' onClick={this.logInSbmtHandler} disabled={false}>LOG IN</button>
            </Link>
          </fieldset>
        </form>
      </Fragment>
    )
  }
}