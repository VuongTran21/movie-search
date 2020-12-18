import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension'

import { loadToDoList, getPopularMovie, getTopMovie } from './redux/actions/index';
import toDoApp from './redux/reducers/index';
import rootSaga from './redux/sagas/index';
const IS_DEV = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(toDoApp, IS_DEV ? composeWithDevTools(applyMiddleware(sagaMiddleware)) : applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(loadToDoList());
store.dispatch(getPopularMovie());
store.dispatch(getTopMovie());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
