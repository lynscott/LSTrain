import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import About from './component/About';
import Dashboard from './component/Dashboard';
import OnlineTraining from './component/OnlineTraining';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers/index.js';
import {StripeProvider} from 'react-stripe-elements';
import promise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import StartPlan from './component/StartPlan';
import Nav from './component/Nav';
import ShowPlan from './component/ShowPlan';

const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk, promise));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Nav className="navbar sticky-top"/>
        <StripeProvider apiKey="pk_test_0MmGCS4ik8k7bj9vK53ziyj9">
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/dashboard/" component={Dashboard} />
            <Route path="/training" component={OnlineTraining} />
            <Route path="/dashboard/plan/:id" component={ShowPlan} />
            <Route exact path="/startplan" component={StartPlan} />
            <Route exact path="/" component={App} />
          </Switch>
        </StripeProvider>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
