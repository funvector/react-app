import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux-app/reducer';
import { HashRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import App from './AppContainer';
import AddCars from './apps/Cars/index';
import LoginForm  from './apps/LoginForm/index';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
  <Router>
    <Switch>
      <Route exact path='/' component={LoginForm}/>
      <Route exact path='/app' component={() => ((JSON.parse(localStorage.getItem('loginConfirme')).session.isLoggedUser) ? <App /> : (<Redirect to='/'/>))}/>
      <Route exact path='/new' component={() => ((JSON.parse(localStorage.getItem('loginConfirme')).session.isLoggedUser) ? <AddCars /> : (<Redirect to='/'/>))}/>
    </Switch>
  </Router>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();