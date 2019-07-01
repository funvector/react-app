// const initialState = {};

// function createStore(reducer, state = initialState) {
//   return {
//       dispatch: action => { state = reducer(state, action) },
//       getState: () => state,
//   }
// }

// // rootReducer
// function rootReducer(state, action) {
//   switch (action.type) {
//     case 'smth':
//       return [
//         ...state, 
//         {...action.text}
//     ]
//     default:
//       return state
//   }
// }

// const store = createStore(rootReducer);

// store.dispatch({
//   type: 'smth',
//   text: 'some txt'
// })

// store.getState()

// // getState

// let isDispatching = true;
// let currentState = initialState;
// let currentListeners = [];
// let nextListeners = currentListeners;

// function getState() {
//   if (isDispatching) {
//     throw new Error(
//       'some txt'
//     )
//   }

//   return currentState;
// }

// // subscribe\unsubscribe это уже из оф доков...не знаю как переписать это лучше чем тут написано)
// function ensureCanMutateNextListeners() {
//   if (nextListeners === currentListeners) {
//     nextListeners = currentListeners.slice()
//   }
// }

// function subscribe(listener) {

//   if (isDispatching) {
//     throw new Error(
//       'some txt'
//     )
//   }

//   let isSubscribed = true

//   ensureCanMutateNextListeners()
//   nextListeners.push(listener)

//   return function unsubscribe() {
//     if (!isSubscribed) {
//       return
//     }

//     if (isDispatching) {
//       throw new Error(
//         'some txt'
//       )
//     }

//     isSubscribed = false

//     ensureCanMutateNextListeners()
//     const index = nextListeners.indexOf(listener)
//     nextListeners.splice(index, 1)
//   }
// }

// // observable
// function observable() {
//   const outerSubscribe = subscribe;
//   return {
//     subscribe(observer) {
//       if (typeof observer !== 'object' || observer === null) {
//         throw new TypeError('Expected the observer to be an object.')
//       }

//       function observeState() {
//         if (observer.next) {
//           observer.next(getState())
//         }
//       }

//       observeState()
//       const unsubscribe = outerSubscribe(observeState)
//       return { unsubscribe }
//     },

//     [$$observable]() {
//       return this
//     }
//   }
// }

// // combineReducers
// function combineReducers(reducersMap) {
//   return function combinationReducer(state, action) {
//     const nextState = {}
//     Object.entries(reducersMap).forEach(([key, reducer]) => {
//       nextState[key] = reducer(state[key], action)
//     })
//     return nextState
//   }
// }

// // Disppatcher..его проще описать классом) выглядит симпотичнее

// class Disppatcher{
//   constructor(store = { getState: () => {}, dispatch: () => {} }) {
//     this.store = store;
//   }

//   // type - действия пользователя, payload - какая то структура данных, date - доп данные, если нужны, err - проверка на успешность...true\false
//   createAction(type, payload, date, err) {
//     return (type, payload, date, err);
//   }

//   dispatchAction(type, payload, date, err) {
//     const { store } = this;
//     store.dispatch(this.createAction(type, payload, date, err))
//   }
// }

// !

import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom'
import createStore from './counter';

const initialState = {
  count: 0
}

function reducer(state = initialState, action){
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      return state;
  }
};

const INCREMENT = {type: 'INCREMENT'};
const DECREMENT = {type: 'DECREMENT'};

const store = createStore(reducer, initialState);

class Caunter extends Component {
  constructor(props){
    super(props);
    this._increment = this._increment.bind(this);
    this._decrement = this._decrement.bind(this);
  }

  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  increment(){
    store.dispatch(this.INCREMENT)
  }

  decrement(){
    store.dispatch(this.DECREMENT)
  }
}