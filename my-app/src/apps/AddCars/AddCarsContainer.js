import AddCars from './AddCars';
import { connect } from 'react-redux';
import { addCars } from '../../redux-app/selectors';
import { addCarsHandler, inputAddLinkHandler, inputAddModelHandler, inputAddPriceHandler } from '../../redux-app/actions';

export default connect(
  (state) => ({
    addCars: addCars(state)
  },{
    addCarsHandler,
    inputAddLinkHandler,
    inputAddModelHandler,
    inputAddPriceHandler
  })
)(AddCars);