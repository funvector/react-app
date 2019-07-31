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
      <Route exact path='/' render={() => localStorage.getItem('loginConfirm') !== null ? 
        ((JSON.parse(localStorage.getItem('loginConfirm')).session.isLoggedUser) ? (<Redirect to='/app'/>) : <LoginForm />) : <LoginForm />}/>
      <Route exact path='/app' render={() => localStorage.getItem('loginConfirm') !== null ? 
        ((JSON.parse(localStorage.getItem('loginConfirm')).session.isLoggedUser) ? <App /> : (<Redirect to='/'/>)) : (<Redirect to='/'/>)}/>
      <Route exact path='/new' render={() => localStorage.getItem('loginConfirm') !== null ? 
        ((JSON.parse(localStorage.getItem('loginConfirm')).session.isLoggedUser) ? <AddCars /> : (<Redirect to='/'/>)) : (<Redirect to='/'/>)}/>
    </Switch>
  </Router>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();