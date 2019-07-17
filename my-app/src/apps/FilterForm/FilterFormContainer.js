import FilterForm from './FilterForm';
import { connect } from 'react-redux';
import { getFilters, getFilterCheked } from './../../redux-app/selectors';
import { inputFilterModelHandler, inputFilterPriceHandler, filterChekedHandler } from './../../redux-app/actions';

export default connect(
  (state) => ({
    getFilters: getFilters(state),
    getFilterCheked: getFilterCheked(state)
  }),
  {
    inputFilterModelHandler,
    inputFilterPriceHandler,
    filterChekedHandler
  },
)(FilterForm);