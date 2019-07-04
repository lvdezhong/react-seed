import { hot } from 'react-hot-loader/root'
import React from 'react'
import {
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import routes from './router.config'

const RouterConfig = () => (
  <HashRouter>
    <Switch>
      {
        routes.map(({ path, component }) => (
          <Route
            path={path}
            key={path}
            exact
            component={component}
          />
        ))
      }
      <Redirect to="/" />
    </Switch>
  </HashRouter>
)

export default (process.env.NODE_ENV === 'development' ? hot(RouterConfig) : RouterConfig)
