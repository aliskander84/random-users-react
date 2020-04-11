import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux'
import {App} from './App'
import {createStore} from 'redux'
import {reducer} from './store/reducer'

const store = createStore(reducer)

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)

ReactDOM.render(app, document.getElementById('root')
)