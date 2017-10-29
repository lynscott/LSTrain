import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index.js';

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root'));
registerServiceWorker();
