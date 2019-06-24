import React from 'react';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

  const initialState = {
    cars: [
      {marked: false, name: 'BMW M2 Coupe', price: '20000', img: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg', ID: 1},
      {marked: false, name: 'Audi TT', price: '15000', img: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598', ID: 2},
      {marked: false, name: 'Rolls Royce', price: '150000', img: 'https://www.cstatic-images.com/car-pictures/xl/usc80rrc041a01300.png', ID: 3},
      {marked: false, name: 'Mercedes amg coupe', price: '38000', img: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2', ID: 4}
    ],
    visible: true,
    appTitle: 'Cars app'
  }

  const CHANGE_TITLE = 'CHANGE_TITLE';
  const TOGGLE_HANDLER = 'TOGGLE_HANDLER';
  const HANDLE_MARKED = 'HANDLE_MARKED';

  const rootReducer = (state = initialState, action) => {
    switch(action.type){
      case CHANGE_TITLE:
        return {...state, appTitle: action.payload};
      case TOGGLE_HANDLER:
        return {...state, visible: action.payload};
        case HANDLE_MARKED:
        return {...state, visible: action.payload};
        default: return state;
    }
  }

  export const store = createStore(rootReducer);

  function Car(props) {

    const classes =['card'];
    if(props.car.marked){
      classes.push('marked')
    }

    return (
      <div className={classes.join(' ')} onClick={props.onMark}>
        <div className='card-img'>
          <img 
            src={props.car.img} 
            alt={props.car.name} />
          </div>
          <h3>{props.car.name}</h3>
          <p>{props.car.price} $</p>
        </div>
      );
    };

    const handleMarked = (name) => {
      const cars = initialState.cars.concat();
      const car = cars.find((c) => c.name === name);
      car.marked = !car.marked;
      this.setState({cars});
    }
  
    const toggleHandler = (visible) => {
      return {
        type: TOGGLE_HANDLER,
        payload: !visible
      }
    }
  
    const renderCars = () => {
      return (initialState.cars.map((car) => (<Car car={car} key={car.ID} onMark={() => handleMarked(car.name)} />)));
    }
  
  const titleChangeHandler = (title) => {
    return {
      type: CHANGE_TITLE,
      payload: title
    }
  }

  class App extends React.Component{

  render = () => {
      const {titleChangeHandler} = this.props;
      const {toggleHandler} = this.props;
      const {visible} = this.props;
      return (
        <div className='app'>
          <h1>{this.props.appTitle}</h1>
          <button className='btn' onClick={() => toggleHandler(visible)}>Toggle</button>
          <input type='text' value={this.props.appTitle} placeholder='Change title' className='inp' onChange={(event) => titleChangeHandler(event.target.value)} />
          <div className='list'>  
            {(visible) ? renderCars() : null}
          </div>
        </div>
      );
    }
  }

  const putActionsToProps = (dispatch) => {
    return {
      titleChangeHandler: bindActionCreators(titleChangeHandler, dispatch),
      toggleHandler: bindActionCreators(toggleHandler, dispatch),
      renderCars: bindActionCreators(renderCars, dispatch)
    };
  }

  const putStateToProps = (state) => {
    return {
      appTitle: state.appTitle,
      visible: state.visible
    };
  }

  const WrappedMainComponent = connect(putStateToProps, putActionsToProps)(App);
  export default WrappedMainComponent;