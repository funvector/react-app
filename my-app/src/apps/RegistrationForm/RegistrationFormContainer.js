import { connect } from 'react-redux';
import { getFilters } from './../../redux-app/selectors';
import RegistrationForm from './RegistrationForm';

export default connect(
  (state) => ({
    getFilters: getFilters(state)
  }),
  {
    
  },
)(RegistrationForm);