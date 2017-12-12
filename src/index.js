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
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk, promise));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <MuiThemeProvider>
        <StripeProvider apiKey="pk_test_0MmGCS4ik8k7bj9vK53ziyj9">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/training" component={OnlineTraining} />
            <Route exact path="/" component={App} />
          </Switch>
        </StripeProvider>
        </MuiThemeProvider>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
