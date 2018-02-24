import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import redutor from './reducers'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Page from './components/page/pageContainer'

let store = createStore(redutor)

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