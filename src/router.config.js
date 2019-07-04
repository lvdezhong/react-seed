
import Loadable from 'react-loadable'
import React from 'react'

// 通用的过场组件
const loadingComponent = () => <div>loading</div>

const dynamicWrapper = (loader, loading = loadingComponent) => (
  Loadable({
    loader,
    loading,
  })
)

const routes = [{
  path: '/',
  component: require('./routes/user/login').default,
}, {
  path: '/home',
  component: dynamicWrapper(() => import('./routes/home/home')),
}]

export default routes
