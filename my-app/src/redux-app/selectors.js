import { createSelector } from 'reselect';
export const getRandomId     = () => Math.floor(Math.random()*(1000000-1+1))+1;
export const getAppTitle     = (state) => state.appTitle;
export const isVisible       = (state) => state.visible;
export const getCars         = (state) => state.cars;
export const getAddCars      = (state) => state.addCars;
export const getFilters      = (state) => state.filters;
export const getFilteredCars = createSelector(
  [getCars, getFilters],
  (cars, filters) => cars.filter((car) => car.model.toUpperCase().includes(filters.model.toUpperCase()) && car.price >= Number(filters.price || '0') && (filters.marked === true ? car.marked : true))
);