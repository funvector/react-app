import FilterForm from './FilterForm';
import { connect } from 'react-redux';
import { getFilters } from './../../redux-app/selectors';
import {  inputFilterModelHandler, inputFilterPriceHandler } from './../../redux-app/actions';

export default connect(
  (state) => ({
    getFilters: getFilters(state)
  }),
  {
    inputFilterModelHandler,
    inputFilterPriceHandler
  },
)(FilterForm);