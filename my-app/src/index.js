import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WrappedMainComponent from './App';
import {store} from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store}><WrappedMainComponent /></Provider>, document.getElementById('root'));
serviceWorker.unregister();