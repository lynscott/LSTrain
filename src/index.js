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
import {StripeProvider} from 'react-stripe-elements';

const store = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={store(rootReducer)}>
    <BrowserRouter>
      <div>
        <StripeProvider apiKey="pk_test_0MmGCS4ik8k7bj9vK53ziyj9">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/training" component={OnlineTraining} />
            <Route path="/" component={App} />
          </Switch>
        </StripeProvider>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
