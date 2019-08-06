import { CHANGE_TITLE } from './actions';

const initialState = {
  appTitle: 'CARS APP'
}

export default function appTitleR(state = initialState, action) {
  switch(action.type){
  case CHANGE_TITLE:
    return (localStorage.getItem('loginConfirm') !== null) ? {...state, appTitle: action.payload} : state;
  default: return state;
  }
}