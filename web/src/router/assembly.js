import React from 'react'
import Loadable from '@@/Loadable'

const App = Loadable(() => import('@/pages/app'))
const Home = Loadable(() => import('@/pages/home'))
const Lx = Loadable(() => import('@/pages/lx'))
const From = Loadable(() => import('@/pages/form'))
const List = Loadable(() => import('@/pages/list'))
const Login = Loadable(() => <h1>Login</h1>)

export {
  App,
  Home,
  Login,
  Lx,
  From,
  List,
}
