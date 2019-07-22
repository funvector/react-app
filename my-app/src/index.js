import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux-app/reducer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './AppContainer';
import AddCars from './apps/Cars/index';
import RegistrationForm from './apps/RegistrationForm/index';
import * as serviceWorker from './serviceWorker';

export const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
  <Router>
    <Switch>
      <Route exact path='/' component={RegistrationForm}/>
      <Route exact path='/app' component={App}/>
      <Route exact path='/new' component={AddCars}/>
    </Switch>
  </Router>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();