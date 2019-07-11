export const getAppTitle = (state) => state.appTitle;
export const isVisible = (state) => state.visible;
export const getCars = (state) => state.cars;
export const addCars = (state) => state.addCars;
export const isMarked = (state) => state.cars.marked;
export const getFilters = (state) => state.filters;
export const getRandomId = () => Math.floor(Math.random()*(1000000-1+1))+1;