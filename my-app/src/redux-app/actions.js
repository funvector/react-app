export const CHANGE_TITLE = 'CHANGE_TITLE';
export const TOGGLE_HANDLER = 'TOGGLE_HANDLER';
export const ADD_CARS = 'ADD_CARS';

export const toggleHandler = () => {
  return {
    type: TOGGLE_HANDLER
  }
}

export const titleChangeHandler = (title) => {
  return {
    type: CHANGE_TITLE,
    payload: title
  }
}

// inputAddLinkHandler = () => {
//   return {
//     type: ADD_CARS,
//     payload: 
//   }
// };

// inputAddModelHandler = () => {
//   return {
//     type: ADD_CARS,
//     payload: 
//   }
// };

// inputAddPriceHandler = () => {
//   return {
//     type: ADD_CARS,
//     payload: 
//   }
// };

// export const addCarsHandler = (newCars) => {
//   return {
//     type: ADD_CARS,
//     payload: newCars
//   }
// }