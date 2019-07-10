import React, { Component, Fragment } from 'react';

export default class FilterForm extends Component{

  inputFilterModelHandler = (event) => this.props.inputFilterModelHandler(event.target.value);
  inputFilterPriceHandler = (event) => this.props.inputFilterPriceHandler(event.target.value);

  render() {
    // const {  } = this.props;
    return (
      <Fragment>
        <form>
        <h3 className='filters-h3'>FILTERS</h3>
          <div className='filetrs-form'>
            <label>
            <h4>ENTER MODEL</h4>
              <input type='text' className='inp' onChange={this.inputFilterModelHandler}/>
            </label>
            <label>
            <h4>ENTER PRICE</h4>
              <input type='text' className='inp' onChange={this.inputFilterPriceHandler} />
            </label>
            <label className='checkbox'>
              <input type='checkbox' /*onChange={} value={}*/ />
              <h4 className='checkbox__text'>MARKED?</h4>
            </label>
          </div>
        </form>
      </Fragment>
      )
    }
  }