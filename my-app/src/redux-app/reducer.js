import { CHANGE_TITLE, TOGGLE_HANDLER } from '../App';

export const initialState = {
  cars: [
    {marked: false, name: 'BMW M2 Coupe', price: '20000', img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg', id: 1},
    {marked: false, name: 'Audi TT', price: '15000', img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598', id: 2},
    {marked: false, name: 'Rolls Royce', price: '150000', img: 'https://www.cstatic-images.com/car-pictures/xl/usc80rrc041a01300.png', id: 3},
    {marked: false, name: 'Mercedes amg coupe', price: '38000', img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2', id: 4}
  ],
  visible: true,
  appTitle: 'Cars app'
}

export const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case CHANGE_TITLE:
      return {...state, appTitle: action.payload};
    case TOGGLE_HANDLER:
      return {...state, visible: action.payload};
      default: return state;
  }
}