import AddCars from './AddCars';
import { connect } from 'react-redux';
import { getAddCars } from './../../redux-app/selectors';
import { addCarsHandler, onLinkChange, inputAddModelHandler, inputAddPriceHandler } from './../../redux-app/filterForm/actions';

export default connect(
  (state) => ({
    addCars: getAddCars(state)
  }),
  {
    addCarsHandler,
    onLinkChange,
    inputAddModelHandler,
    inputAddPriceHandler,
  },
)(AddCars);