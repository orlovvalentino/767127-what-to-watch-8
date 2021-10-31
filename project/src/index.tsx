import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {films} from './mocks/films';
import {reducer} from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App films = {films}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
