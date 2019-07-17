import React, { Component, Fragment } from 'react';
// import classNames from 'classnames';

export default class FilterForm extends Component{

  inputFilterModelHandler = (event) => this.props.inputFilterModelHandler(event.target.value);
  inputFilterPriceHandler = (event) => this.props.inputFilterPriceHandler(event.target.value);
  filterChekedHandler     = () => this.props.filterChekedHandler();

  render() {
    
    const { getFilters, getFilterCheked } = this.props;

    // let labelCheckboxFilter = classNames('checkbox', this.props.className, {
    //   '.checkbox input:checked + .checkbox__text:before .checkbox input:checked + .checkbox__text:after': getFilterCheked.getFilterCheked === true
    // });

    return (
      <Fragment>
        <form>
        <h3 className='filters-h3'>FILTERS</h3>
          <div className='filetrs-form'>
            <label>
            <h4>ENTER MODEL</h4>
              <input type='text' className='inp' onChange={this.inputFilterModelHandler} value={getFilters.model}/>
            </label>
            <label>
            <h4>ENTER PRICE</h4>
              <input type='number' className='inp' onChange={this.inputFilterPriceHandler} value={getFilters.price}/>
            </label>
            <label className='checkbox'>
              <input type='checkbox' onChange={this.filterChekedHandler} checked={getFilterCheked.getFilterCheked}/>
              <h4 className='checkbox__text'>MARKED?</h4>
            </label>
          </div>
        </form>
      </Fragment>
      )
    }
  }