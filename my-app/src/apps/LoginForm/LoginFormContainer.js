import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { getLogin } from './../../redux-app/selectors';
import { inputEmailIsValid, inputPasswordIsValid } from './../../redux-app/loginForm/actions';

export default connect(
  (state) => ({
    getLoginValue: getLogin(state)
  }),
  {
    inputPasswordIsValid,
    inputEmailIsValid,
  },
)(LoginForm);