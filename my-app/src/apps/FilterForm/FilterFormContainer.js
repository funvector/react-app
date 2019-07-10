import FilterForm from './FilterForm';
import { connect } from 'react-redux';
// import {  } from './../../redux-app/selectors';
import {  inputFilterModelHandler, inputFilterPriceHandler } from './../../redux-app/actions';

export default connect(
  (state) => ({
    
  }),
  {
    inputFilterModelHandler,
    inputFilterPriceHandler
  },
)(FilterForm);