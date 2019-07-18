import { TOGGLE_HANDLER } from './actions';

const initialState = {
  visible: true
}

export default function toggleButtonHandlerR(state = initialState, action) {
  switch(action.type){
  case TOGGLE_HANDLER:
    return {...state, visible: !state.visible};
  default: return state;
  }
}