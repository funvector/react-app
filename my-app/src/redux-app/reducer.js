import { combineReducers } from 'redux';
import appTitleR from './appTitle/reducers';
import addCarsR from './addCars/reducers';
import filterFormR from './filterForm/reducers';
import toggleButtonHandlerR from './toggleButtonHandler/reducers';

export default combineReducers({
  addCarsR,
  appTitleR,
  filterFormR,
  toggleButtonHandlerR
});