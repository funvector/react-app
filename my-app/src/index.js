import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux-app/reducer';
import { HashRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import App from './AppContainer';
import AddCars from './apps/Cars/index';
import LoginForm  from './apps/LoginForm/index';
import { limitLoginTime } from './apps/LoginForm/LoginForm';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
  <Router>
    <Switch>
      <Route exact path='/' render={() => {
        if(localStorage.getItem('loginConfirm') !== null){
          if(JSON.parse(localStorage.getItem('loginConfirm')).session.isLoggedUser && (+new Date() - JSON.parse(localStorage.getItem('loginConfirm')).session.loginDateTime) < limitLoginTime){
            return (<Redirect to='/app'/>);
          } else {
            localStorage.removeItem('loginConfirm');
            return <LoginForm />;
          }
        } else {
            return <LoginForm />;
        }
      }}/>

      <Route exact path='/app' render={() => {
        if(localStorage.getItem('loginConfirm') !== null){
          if(JSON.parse(localStorage.getItem('loginConfirm')).session.isLoggedUser && (+new Date() - JSON.parse(localStorage.getItem('loginConfirm')).session.loginDateTime) < limitLoginTime){
            return <App />;
          } else {
            localStorage.removeItem('loginConfirm');
            return (<Redirect to='/'/>);
          }
        } else {
          return (<Redirect to='/'/>);
        }
      }}/>
      
      <Route exact path='/new' render={() => {
        if(localStorage.getItem('loginConfirm') !== null){
          if(JSON.parse(localStorage.getItem('loginConfirm')).session.isLoggedUser && (+new Date() - JSON.parse(localStorage.getItem('loginConfirm')).session.loginDateTime) < limitLoginTime){
            return  <AddCars />;
          } else {
            localStorage.removeItem('loginConfirm');
            return (<Redirect to='/'/>);
          }
        } else {
          return (<Redirect to='/'/>);
        }
      }}/>
    </Switch>
  </Router>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();