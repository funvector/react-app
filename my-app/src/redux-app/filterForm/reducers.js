import { FILTER_MODEL, MARKED_HANDLER, FILTER_PRICE, CHEKED_HANDLER } from './actions';
import { getRandomId } from './../selectors';

const initialState = {
  cars: [
    {marked: false, model: 'Audi TT', price: '15000', img: 'https://www.whatcar.com/car-leasing/images/imagery/large/10753.jpg', id: getRandomId()},
    {marked: false, model: 'BMW X5', price: '30000', img: 'https://cars-specs.com/wp-content/uploads/2012/11/x5m.jpg', id: getRandomId()},
    {marked: false, model: 'Lamborghini Urus', price: '450000', img: 'https://www.supercarreport.com/wp-content/uploads/2019/03/7-1.jpg', id: getRandomId()},
    {marked: false, model: 'Mercedes amg coupe', price: '48000', img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2', id: getRandomId()}
  ],
  filters: {model: '', price: '', marked: false}
}

export default function filterFormR(state = initialState, action) {
  switch(action.type){
  case FILTER_MODEL:
    return {...state, filters: {...state.filters,...action.payload}};
  case MARKED_HANDLER:
    return {...state, cars: state.cars.map((car) => (car.id === action.payload)? {...car, marked: !car.marked} : car)};  
  case FILTER_PRICE:
    return {...state, filters: {...state.filters,...action.payload}};
  case CHEKED_HANDLER:
    return {...state, filters: {...state.filters, marked: !state.filters.marked}};
  default: return state;
  }
}