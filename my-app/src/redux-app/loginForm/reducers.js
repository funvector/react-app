import { LOGIN_SBMT, ADD_EMAIL_ISVALID, ADD_PASSWORD_ISVALID } from './actions';

const initialState = {
  login: {email: '', password: '', emailIsValid: false, passwordIsValid: false}
};

export default function loginFormR(state = initialState, action) {
  switch(action.type){
    case ADD_EMAIL_ISVALID:
      return (
        (/^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([\.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i.test(state.login.email)) ?
        {...state, login: {...state.login,...action.payload, emailIsValid: true}} : 
        {...state, login: {...state.login,...action.payload, emailIsValid: false}}
      );
    case ADD_PASSWORD_ISVALID:
      return (
        (state.login.password.length >= 8 && !state.login.password.includes(' ') && state.login.password !== '') ?
        // (/^\S{7,}$/.test(state.login.password)) ?
        {...state, login: {...state.login,...action.payload, passwordIsValid: true}} : 
        {...state, login: {...state.login,...action.payload, passwordIsValid: false}}
      );
    case LOGIN_SBMT:
      return state;
    default: return state;
  }
};