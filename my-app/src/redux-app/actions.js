import { getRandomId } from './selectors';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const TOGGLE_HANDLER = 'TOGGLE_HANDLER';
export const ADD_CARS = 'ADD_CARS';
export const PUSH_CARS_LINK = 'PUSH_CARS_LINK';
export const PUSH_CARS_NAME = 'PUSH_CARS_NAME';
export const PUSH_CARS_PRICE = 'PUSH_CARS_LINK';

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

export const onLinkChange = (link) => {
  return {
    type: PUSH_CARS_LINK,
    payload: {img: link}
  }
};

export const inputAddModelHandler = (modelNmae) => {
  return {
    type: PUSH_CARS_NAME,
    payload: {model: modelNmae}
  }
};

export const inputAddPriceHandler = (price) => {
  return {
    type: PUSH_CARS_PRICE,
    payload: {price: price, id: getRandomId()}
  }
};

export const addCarsHandler = () => {
  return {
    type: ADD_CARS
  }
}