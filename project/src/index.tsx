import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {reducer} from './store/reducer';

const api = createAPI(
  () => {
  },
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App films = {films}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
