import { CHANGE_TITLE, TOGGLE_HANDLER, ADD_CARS, PUSH_CARS_LINK, PUSH_CARS_NAME, PUSH_CARS_PRICE } from './actions';
import { getRandomId } from './selectors';

export const initialState = {
  cars: [
    {model: 'BMW M2 Coupe', price: '20000', img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg', id: getRandomId()},
    {model: 'Audi TT', price: '15000', img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598', id: getRandomId()},
    {model: 'Rolls Royce', price: '150000', img: 'https://www.cstatic-images.com/car-pictures/xl/usc80rrc041a01300.png', id: getRandomId()},
    {model: 'Mercedes amg coupe', price: '38000', img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2', id: getRandomId()}
  ],
  addCars: {model: '', price: '', img: '', id: null},
  visible: true,
  appTitle: 'Cars app'
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_TITLE:
      return {...state, appTitle: action.payload};
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