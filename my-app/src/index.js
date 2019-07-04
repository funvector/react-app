import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './redux-app/reducer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './AppContainer';

import * as serviceWorker from './serviceWorker';
import AddCars from './apps/AddCars';

export const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
  <Router>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/src/App.js' component={App}/>
      <Route exact path='/src/apps/AddCars/index.js' component={AddCars}/>
    </Switch>
  </Router>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();