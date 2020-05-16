import React from 'react'
import { Input } from 'antd'
import './style.less'

export default class Search extends React.PureComponent {
  render () {
    const { placeholder = '' } = this.props
    return (
      <div className="common-search">
        <label htmlFor="search">搜索: </label>
        <Input placeholder={placeholder} id="search" />
      </div>
    )
  }
}
