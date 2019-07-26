import { LOGIN_SBMT, ADD_EMAIL_ISVALID, ADD_PASSWORD_ISVALID } from './actions';

const initialState = {
  login: {email: '', password: '', emailIsValid: false, passwordIsValid: false}
};

export default function loginFormR(state = initialState, action) {
  switch(action.type){
    case ADD_EMAIL_ISVALID:
      return (
        (state.login.email !== '' && state.login.email.includes('@')) ?
        {...state, login: {...state.login,...action.payload, emailIsValid: true}} : 
        {...state, login: {...state.login,...action.payload, emailIsValid: false}}
      );
    case ADD_PASSWORD_ISVALID:
      return (
        (/^[a-zA-Z0-9]{7,}$/.test(state.login.password)) ?
        {...state, login: {...state.login,...action.payload, passwordIsValid: true}} : 
        {...state, login: {...state.login,...action.payload, passwordIsValid: false}}
      );
    case LOGIN_SBMT:
      return state;
    default: return state;
  }
};