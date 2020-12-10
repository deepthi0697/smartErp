import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'

import {GetPost} from './actions/postAction'

import configureStore from './store/configurStore'
const store = configureStore()

store.dispatch(GetPost())

const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))