import React from 'react'
import { Icon } from 'antd'
import { NavLink } from 'react-router-dom'
import './style.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1779452_4nef7g5y57k.js',
})

export default class Home extends React.Component {
  render () {
    return (
      <div className="common-tabbar">
        <ul>
          <li>
            <NavLink exact to="/" >
              <IconFont type="icon-shouyeweixuanzhong" className="icon" /> 
              首页
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/all" >
              <IconFont type="icon-quanbu" className="icon" /> 
              全部分类
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/cart" >
              <IconFont type="icon-che" className="icon" />
              购物车
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/user" >
              <IconFont type="icon-wodedangxuan" className="icon" /> 
              个人中心
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

