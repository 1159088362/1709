import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import {BrowserRouter,Switch,Route} from "react-router-dom"
import TabBar from "@@/TarBar"
import Home from "./pages/home"

const All = () => <h1>All</h1>
const Cart = () => <h1>Cart</h1>
const User = () => <h1>User</h1>
ReactDOM.render(
  <BrowserRouter>
  
    <Switch>
     <Route path="/all" component={All} />
     <Route path="/cart" component={Cart} />
     <Route path="/user" component={User} />
     <Route path="/" component={Home} />
    </Switch>
    <TabBar />
  </BrowserRouter>,
  document.querySelector('#root')
)
