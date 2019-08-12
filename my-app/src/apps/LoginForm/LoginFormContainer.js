import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { getLogin } from './../../redux-app/selectors';
import { withRouter } from 'react-router-dom';
import { inputEmailIsValid, inputPasswordIsValid } from './../../redux-app/loginForm/actions';

export default withRouter(connect(
  (state) => ({
    getLoginValue: getLogin(state)
  }),
  {
    inputPasswordIsValid,
    inputEmailIsValid,
  },
)(LoginForm));