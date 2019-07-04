import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux-app/reducer';
import { HashRouter as Router, Route } from 'react-router-dom';
import App from './AppContainer';

import * as serviceWorker from './serviceWorker';

export const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
  <Router>
    <Route component={App}/>
  </Router>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();