import { CHANGE_TITLE } from './actions';

const initialState = {
  appTitle: 'CARS APP'
}

export default function appTitleR(state = initialState, action) {
  switch(action.type){
  case CHANGE_TITLE:
    return {...state, appTitle: action.payload};
  default: return state;
  }
}