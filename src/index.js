import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from "./App"
import ReducerApp from './reducers'

const store = createStore(ReducerApp);

ReactDOM.render(

    <Provider store={store}>  
      <App />
    </Provider>

    , document.querySelector('#app')
)

