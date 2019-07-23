import { ADD_EMAIL, ADD_PASSWORD, LOGIN_SBMT } from './actions';

const initialState = {
  login: {email: '', password: ''}
};

export default function loginFormR(state = initialState, action) {
  switch(action.type){
  case ADD_EMAIL:
    return {...state, login: {...state.login,...action.payload}};
  case ADD_PASSWORD:
    return {...state, login: {...state.login,...action.payload}};
  case LOGIN_SBMT:
    return ;
  default: return state;
  }
};