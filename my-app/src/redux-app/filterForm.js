// import { initialState } from './reducer';
// import { FILTER_MODEL, MARKED_HANDLER, FILTER_PRICE, CHEKED_HANDLER } from './actions';

// export default function appTitleRed(state = initialState, action) {
//   switch(action.type){
//   case FILTER_MODEL:
//     return {...state, filters: {...state.filters,...action.payload}};
//   case MARKED_HANDLER:
//     return {...state, cars: state.cars.map((car) => (car.id === action.payload)? {...car, marked: !car.marked} : car)};  
//   case FILTER_PRICE:
//     return {...state, filters: {...state.filters,...action.payload}};
//   case CHEKED_HANDLER:
//     return {...state, filters: {...state.filters, marked: !state.filters.marked}};
//   default: return state;
//   }
// }