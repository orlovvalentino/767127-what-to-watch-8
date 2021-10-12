import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mocks/films';

const moviePromo = {
  promoName: 'The Grand Budapest Hotel',
  promoGenre: 'dram',
  promoDate: '2014',
};

ReactDOM.render(
  <React.StrictMode>
    <App moviePromo={moviePromo} films = {films}/>
  </React.StrictMode>,
  document.getElementById('root'));
