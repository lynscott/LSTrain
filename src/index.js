import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import About from './component/About';
import OnlineTraining from './component/OnlineTraining';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers/index.js';

const store = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={store(rootReducer)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/training" component={OnlineTraining} />
          <Route path="/" component={App} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
