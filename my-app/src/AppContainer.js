import App from './App';
import { toggleHandler } from './redux-app/toggleButtonHandler/actions';
import { titleChangeHandler } from './redux-app/appTitle/actions';
import { connect } from 'react-redux';
import { getAppTitle, isVisible } from './redux-app/selectors';
import { logautBtnDeletHandler } from './redux-app/loginForm/actions';

export default connect(
  (state) => ({
    appTitle: getAppTitle(state),
    visible: isVisible(state),
  }),
  {
    logautBtnDeletHandler,
    titleChangeHandler,
    toggleHandler
  },
)(App);