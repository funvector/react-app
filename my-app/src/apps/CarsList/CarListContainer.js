import CarsList from './CarList';
import { connect } from 'react-redux';
import { getCars } from '../../redux-app/selectors';


export default connect(
  (state) => ({
    cars: getCars(state)
  }),
  null,
)(CarsList);