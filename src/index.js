import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import redutor from './reducers'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './components/app'
import thunk from 'redux-thunk'
// import Page from './components/page/pageContainer'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

// let store = createStore(redutor, applyMiddleware(thunk))

ReactDOM.render( 
    <Provider store={store}>
        <BrowerRouter>
            <App />
        </BrowerRouter>
    </Provider>,
    // React.createElement(Page, null), 
    // React.createElement('h1', { className: 'heading'}, 'Ooooooi Brunaaaa'), 
    document.getElementById('root')
)