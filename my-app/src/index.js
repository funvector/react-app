import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore/*, applyMiddleware*/  } from 'redux';
import rootReducer from './redux-app/reducer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './AppContainer';
import AddCars from './apps/Cars/index';
import LoginForm  from './apps/LoginForm/index';
import * as serviceWorker from './serviceWorker';

// const logger = (state) => (next) => (action) => {
//   console.log(action);
//   next(action);
// }

const store = createStore(rootReducer, /*applyMiddleware(logger)*/);

ReactDOM.render(<Provider store={store}>
  <Router>
    <Switch>
      <Route exact path='/' component={LoginForm}/>
      <Route exact path='/app' component={App}/>
      <Route exact path='/new' component={AddCars}/>
    </Switch>
  </Router>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();