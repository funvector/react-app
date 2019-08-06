import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default class AddCars extends Component{

  onLinkChange          = (event) => this.props.onLinkChange(event.target.value);
  inputAddModelHandler  = (event) => this.props.inputAddModelHandler(event.target.value);
  inputAddPriceHandler  = (event) => this.props.inputAddPriceHandler(event.target.value);
  logautBtnDeletHandler = () => this.props.logautBtnDeletHandler();
  addCarsHandler        = () => this.props.addCarsHandler();
  toMainPargeLink       = (event) => {
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    const { addCars } = this.props;

    let loginVisibility = classNames('btn-regForm btn-regFormLoginLink', this.props.className, {
      'loginLogoutVisibilityHidden': localStorage.getItem('loginConfirm') !== null
    });

    let logoutVisibility = classNames('btn-regForm btn-regFormLogout', this.props.className, {
      'loginLogoutVisibilityHidden': localStorage.getItem('loginConfirm') === null
    });
    
    return (
      <Fragment>
        <Link to='/login' className={loginVisibility}>LOG IN</Link>
        <Link to='/login' onClick={this.logautBtnDeletHandler} className={logoutVisibility}>LOG OUT</Link>
        <form>
          <label>
          <h3>ADD LINK TO IMG</h3>
            <input type='text' className='inp' onChange={this.onLinkChange} value={addCars.img} />
          </label>
          <label>
          <h3>ADD MODEL</h3>
            <input type='text' className='inp' onChange={this.inputAddModelHandler} value={addCars.model} />
          </label>
          <label>
          <h3>ADD PRICE</h3>
            <input type='text' className='inp' onChange={this.inputAddPriceHandler} value={addCars.price} />
          </label>
          <Link to='/'>
            <button type='button' className='btn btn-add_cars' onClick={this.addCarsHandler} disabled={!addCars.img || !addCars.model || !addCars.price}>
              Add
            </button>
          </Link>
        </form>
        <Link to='/'>TO MAIN PAGE</Link>
      </Fragment>
      )
    }
  }