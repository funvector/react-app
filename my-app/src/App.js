import { Link } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import CarsList from './apps/CarsList';
import FilterForm from './apps/FilterForm/FilterFormContainer';

class App extends Component{

  toggleHandler         = () => this.props.toggleHandler();
  titleChangeHandler    = (event) => this.props.titleChangeHandler(event.target.value);
  logautBtnDeletHandler = () => this.props.logautBtnDeletHandler();

  render = () => {
    const { visible } = this.props;

    let loginVisibility = classNames('btn-regForm btn-regFormLoginLink', this.props.className, {
      'loginLogoutVisibilityHidden': localStorage.getItem('loginConfirm') !== null
    });
  
    let logoutVisibility = classNames('btn-regForm btn-regFormLogout', this.props.className, {
      'loginLogoutVisibilityHidden': localStorage.getItem('loginConfirm') === null
    });

    return (
      <Fragment>
        <div className='app'>
          <Link to='/login' className={loginVisibility}>LOG IN</Link>
          <Link to='/login' onClick={this.logautBtnDeletHandler} className={logoutVisibility}>LOG OUT</Link>
          <h1>{this.props.appTitle}</h1>
          <input type='text' maxLength="50" value={this.props.appTitle} className='inp' onChange={this.titleChangeHandler} />
          <button className='btn' onClick={this.toggleHandler}>Toggle</button>
          <div className='list'>  
            {(visible) ? <CarsList /> : null}
          </div>
          <FilterForm />
          <Link to='/new' className='btn btn-add_cars'>Add cars +</Link>
        </div>
      </Fragment>
    );
  }
}

export default App;