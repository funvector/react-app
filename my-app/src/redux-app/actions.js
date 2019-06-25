import React from 'react';
import Car from '../carComponent';
import { CHANGE_TITLE, TOGGLE_HANDLER } from '../App';
import { initialState } from './reducer';

export const toggleHandler = () => {
  return ((initialState.visible) ? {type: TOGGLE_HANDLER, payload: !visible} : {type: TOGGLE_HANDLER, payload: visible});
}

export const renderCars = () => {
  return (initialState.cars.map((car) => (<Car car={car} key={car.id} />)));
}

export const titleChangeHandler = (title) => {
  return {
    type: CHANGE_TITLE,
    payload: title
  }
}