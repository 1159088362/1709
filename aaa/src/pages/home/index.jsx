import React from 'react'
import Swiper from 'swiper'
import axios from 'axios'
import Search from '@@/search'
import 'swiper/css/swiper.min.css';
import './styles.less'

export default class Home extends React.Component {
  state = {
    result: [],
  }
  
  componentDidMount () {
    axios.get('data.json')
      .then(res => {
        this.setState({
          result: res.data.data.goodsList
        }, () => {
          new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            loopFillGroupWithBlank: true,
          })
        })
      })
  }

  render () {
    const { result } = this.state

    return (
      <div className="pages-home">
        <Search placeholder="搜索您想要的商品" />
        
        {/* 滚动图片 */}
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {
              result.map(rt => {
                return (
                  <div 
                    key={rt.id} 
                    className="swiper-slide"
                  >
                    <img src={rt.imgurl} className="img" />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
