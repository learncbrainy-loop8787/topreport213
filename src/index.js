import React from 'react';
import ReactDOM from 'react-dom';  //used at the top level of a web app to enable an efficient way of managing DOM elements of the web page.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk' //The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.
import { Provider } from 'react-redux'
import rootReducer from './reducers' // React re-renders the component and useReducer() returns the new state value:

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
