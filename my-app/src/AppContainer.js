import App from './App';
import { toggleHandler, titleChangeHandler } from './redux-app/actions';
import { connect } from 'react-redux';
import { getAppTitle, isVisible } from './redux-app/selectors'



export default connect(
  (state) => ({
    appTitle: getAppTitle(state),
    visible: isVisible(state)
  }),
  {
    titleChangeHandler,
    toggleHandler,
  },
)(App);