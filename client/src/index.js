import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

import 'materialize-css/dist/css/materialize.min.css'

const rootElement = document.getElementById('root')
const rootRender = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

render(rootRender(), rootElement)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note: this comes with some pitfalls.
serviceWorker.unregister()
