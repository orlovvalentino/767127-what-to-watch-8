import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {fetchFilmsAction, checkAuthAction, getFavoriteFilms} from './store/api-actions';
import {ThunkAppDispatch} from './types/action';
import {setAuthorizationStatus} from './store/action';
import {redirect} from './store/middlewares/redirect';

const api = createAPI(
  () => store.dispatch(setAuthorizationStatus(false)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchFilmsAction());
(store.dispatch as ThunkAppDispatch)(getFavoriteFilms());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
