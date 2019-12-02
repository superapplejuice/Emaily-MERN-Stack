import React, { useEffect } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchUserAction } from '../redux/actions'
import history from './history'

import Dashboard from './main/Dashboard'
import Header from './main/Header'
import Landing from './main/Landing'
import AddCredits from './credits/AddCredits'
import SurveyNew from './survey/SurveyNew'
import SurveySubmit from './survey/SurveySubmit'

const App = ({ fetchUserAction }) => {
  useEffect(() => {
    fetchUserAction()
    // eslint-disable-next-line
  }, [])

  const routesHelper = () => (
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route exact path='/dashboard' component={Dashboard} />
      <Route path='/surveys/new' component={SurveyNew} />
      <Route path='/surveys/submit' component={SurveySubmit} />
      <Route path='/add_credits' component={AddCredits} />
    </Switch>
  )

  const rootRender = () => (
    <Router history={history}>
      <Header />
      <div className='container'>{routesHelper()}</div>
    </Router>
  )

  return rootRender()
}

export default connect(undefined, { fetchUserAction })(App)
