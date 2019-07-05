export const CHANGE_TITLE = 'CHANGE_TITLE';
export const TOGGLE_HANDLER = 'TOGGLE_HANDLER';
export const ADD_CARS = 'ADD_CARS';
export const PUSH_CARS = 'PUSH_CARS';

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

export const inputAddLinkHandler = (link) => {
  return {
    type: PUSH_CARS,
    payload: {img: link}
  }
};

export const inputAddModelHandler = (modelNmae) => {
  return {
    type: PUSH_CARS,
    payload: {name: modelNmae}
  }
};

export const inputAddPriceHandler = (price) => {
  return {
    type: PUSH_CARS,
    payload: {price: price}
  }
};

export const addCarsHandler = () => {
  return {
    type: ADD_CARS,
    payload: null
  }
}