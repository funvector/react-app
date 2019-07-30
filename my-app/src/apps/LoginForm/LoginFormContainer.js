import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getLogin } from './../../redux-app/selectors';
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