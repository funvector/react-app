import CarsList from './AddCars';
import { connect } from 'react-redux';
import { getCars } from '../../redux-app/selectors';


export default connect(
  (state) => ()(CarsList)
  );