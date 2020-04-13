import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import {reducer} from './store/reducer'
import {BrowserRouter} from 'react-router-dom'
import {App} from './App'

const store = createStore(reducer, applyMiddleware(thunk))

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root'))