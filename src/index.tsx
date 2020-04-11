import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {reducer} from './store/reducer'
import {BrowserRouter} from 'react-router-dom'
import {App} from './App'

const store = createStore(reducer)

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root')
)