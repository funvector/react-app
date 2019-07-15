import CarsList from './CarsList';
import { connect } from 'react-redux';
import { getCars, isMarked } from '../../redux-app/selectors';
import { handleMarked } from './../../redux-app/actions'

export default connect(
  (state) => ({
    cars: getCars(state),
    isMarked: isMarked(state)
  }),
  {
    handleMarked
  }
)(CarsList);