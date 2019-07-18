import { createSelector } from 'reselect';
export const getRandomId     = () => Math.floor(Math.random()*(1000000-1+1))+1;
export const getAppTitle     = (state) => state.appTitle;
export const isVisible       = (state) => state.visible;
export const getCars         = (state) => state.cars;
export const getAddCars      = (state) => state.addCars;
export const getFilters      = (state) => state.filters;
export const getFilteredCars = createSelector(
  [getCars, getFilters],
  (cars, filters) => cars.filter((car) => {
   return ((filters.model !== '' && ' ') ? car.model.toUpperCase() === filters.model.toUpperCase() : true && (filters.price !== '' && '0') ? Number(car.price) === Number(filters.price) : true && (filters.marked === true) ? car.marked : true)
  }));