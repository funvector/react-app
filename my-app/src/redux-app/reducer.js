import { CHANGE_TITLE, TOGGLE_HANDLER, ADD_CARS, PUSH_CARS_LINK, PUSH_CARS_NAME, PUSH_CARS_PRICE, FILTER_MODEL, FILTER_PRICE } from './actions';
import { getRandomId } from './selectors';

export const initialState = {
  cars: [
    {marked: false, model: 'Audi TT', price: '15000', img: 'http://tuninga.ru/upload/iblock/692/2014_tt_coupe.png', id: getRandomId()},
    {marked: false, model: 'BMW X5', price: '30000', img: 'https://cars-specs.com/wp-content/uploads/2012/11/x5m.jpg', id: getRandomId()},
    {marked: false, model: 'Lamborghini Urus', price: '450000', img: 'https://www.supercarreport.com/wp-content/uploads/2019/03/7-1.jpg', id: getRandomId()},
    {marked: false, model: 'Mercedes amg coupe', price: '48000', img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2', id: getRandomId()}
  ],
  addCars: {marked: false, model: '', price: '', img: '', id: null},
  visible: true,
  appTitle: 'CARS APP',
  filters: {model: '', price: '', marked: false}
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_TITLE:
      return {...state, appTitle: action.payload};
    case FILTER_MODEL:
      // return  {...state, ...Object.assign({}, state, {cars: state.cars.filter((car) => car.model === action.payload.model)})};
      return {...state, filters: {...state.filters,...action.payload}, cars: state.cars.map((car) => (car.model === state.filters.model) ? state.cars.filter((car) => car.model === state.filters.model) : state.cars)};
    case FILTER_PRICE:
      return {...state, filters: {...state.filters,...action.payload}, cars: state.cars.map((car) => (car.price === state.filters.price) ? state.cars.filter((car) => car.price === state.filters.price) : state.cars)};
    case TOGGLE_HANDLER:
      return {...state, visible: !state.visible};
    case PUSH_CARS_LINK:
      return {...state, addCars: {...state.addCars,...action.payload}};
    case PUSH_CARS_NAME:
      return {...state, addCars: {...state.addCars,...action.payload}};
    case PUSH_CARS_PRICE:
      return {...state, addCars: {...state.addCars,...action.payload}};
    case ADD_CARS:
      return {
        ...state,
        cars: state.cars.concat(state.addCars),
        addCars: {
          ...initialState.addCars
        },
      };
    default: return state;
  }
}