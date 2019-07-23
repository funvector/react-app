import { getLogin } from './../../redux-app/selectors';
export const ADD_EMAIL     = 'ADD_EMAIL';
export const ADD_PASSWORD  = 'ADD_PASSWORD';
export const LOGIN_SBMT    = 'LOGIN_SBMT';

export const inputAddEmailHandler = (email) => {
  return {
    type: ADD_EMAIL,
    payload: {email}
  }
};

export const inputAddPasswordHandler = (pass) => {
  return {
    type: ADD_PASSWORD,
    payload: {pass}
  }
};

export const logInSbmtHandler = (event) => {
  if(getLogin.email && getLogin.password === ''){
    event.preventDefoult();
  } else {
    return {
      type: LOGIN_SBMT
    }
  }
};