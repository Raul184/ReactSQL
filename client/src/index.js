import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Redux
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReducer } from './reducers/rootReducer'

const initState = {}
const middlewares = [thunkMiddleware];
const store = createStore( 
  rootReducer , 
  initState , 
  composeWithDevTools(applyMiddleware(...middlewares)) 
)


ReactDOM.render(
  <Provider store={store}>
    <App /> 
  </Provider> ,
  document.getElementById('root')
);
