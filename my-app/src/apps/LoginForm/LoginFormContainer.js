import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { getLogin } from './../../redux-app/selectors';
import { inputAddEmailHandler, inputAddPasswordHandler, logInSbmtHandler, inputEmailIsValid, inputPasswordIsValid } from './../../redux-app/loginForm/actions';

export default connect(
  (state) => ({
    getLoginValue: getLogin(state)
  }),
  {
    inputAddEmailHandler,
    inputAddPasswordHandler,
    inputPasswordIsValid,
    inputEmailIsValid,
    logInSbmtHandler
  },
)(LoginForm);