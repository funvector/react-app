import { ADD_EMAIL, ADD_PASSWORD, LOGIN_SBMT, EMAIL_ISVALID, PASSWORD_ISVALID } from './actions';

const initialState = {
  login: {email: '', password: '', emailIsValid: false, passwordIsValid: false}
};

export default function loginFormR(state = initialState, action) {
  switch(action.type){
    case ADD_EMAIL:
      return {...state, login: {...state.login,...action.payload}};
    case ADD_PASSWORD:
      return {...state, login: {...state.login,...action.payload}};
    case EMAIL_ISVALID:
      return (
        (state.login.email !== '' && state.login.email.indexOf('@') !== -1) ? {...state, login: {...state.login, emailIsValid: true}} : {...state, login: {...state.login, emailIsValid: false}}
      );
    case PASSWORD_ISVALID:
      return (
        (state.login.password.length >= 8 && state.login.password !== '') ? {...state, login: {...state.login, passwordIsValid: true}} : {...state, login: {...state.login, passwordIsValid: false}}
      );
    case LOGIN_SBMT:
      return state;
    default: return state;
  }
};