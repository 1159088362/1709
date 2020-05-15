import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Link } from "react-router-dom"
import { App, Home, Login, Lx, From, List } from './assembly'
export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <p><Link to="/list">List</Link></p>
        <p><Link to="/form">Form</Link></p>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/lx" component={Lx} />
          <Route path="/form" component={From} />
          <Route path="/list" component={List} />
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    )
  }
}
