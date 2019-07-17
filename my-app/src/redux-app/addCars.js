// import { initialState } from './reducer';
// import { PUSH_CARS_LINK, PUSH_CARS_NAME, PUSH_CARS_PRICE, ADD_CARS } from './actions';

// export default function appTitleRed(state = initialState, action) {
//   switch(action.type){
//   case PUSH_CARS_LINK:
//     return {...state, addCars: {...state.addCars,...action.payload}};
//   case PUSH_CARS_NAME:
//     return {...state, addCars: {...state.addCars,...action.payload}};
//   case PUSH_CARS_PRICE:
//     return {...state, addCars: {...state.addCars,...action.payload}};
//   case ADD_CARS:
//     return {
//       ...state,
//       cars: state.cars.concat(state.addCars),
//       addCars: {
//         ...initialState.addCars
//       },
//     };
//   default: return state;
//   }
// }