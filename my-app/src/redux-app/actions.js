import React from 'react';
import Car from '../carComponent';
import { initialState } from './reducer';

export const CHANGE_TITLE = 'CHANGE_TITLE';
export const TOGGLE_HANDLER = 'TOGGLE_HANDLER';

export const toggleHandler = () => {
  return {
    type: TOGGLE_HANDLER
  }
}

export const renderCars = () => {
  return (initialState.cars.map((car) => (<Car car={car} key={car.id} className='card'/>)));
}

export const titleChangeHandler = (title) => {
  return {
    type: CHANGE_TITLE,
    payload: title
  }
}