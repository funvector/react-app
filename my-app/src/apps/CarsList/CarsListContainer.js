import CarsList from './CarsList';
import { connect } from 'react-redux';
import { getFilteredCars } from './../../redux-app/selectors';
import { handleMarked } from './../../redux-app/filterForm/actions';

export default connect(
  (state) => ({
    cars: getFilteredCars(state)
  }),
  {
    handleMarked
  }
)(CarsList);