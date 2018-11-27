import React, { Component } from 'react'
import { Carousel } from 'antd';
import './InstaSection.css'

export default class InstaSection extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
      };

      if (this.state == null) {
        return (<div></div>)
      }

      let images = this.state.urls.map(function(url) {
        return (
          <div className='image-container'>
            <img src={url}></img>
          </div>
        )
      })

      return (
        <div className='insta'>
          <Carousel {...settings}>
            {images}
          </Carousel>
        </div>
      );
    }

    componentDidMount() {
      fetch('https://kylejm.herokuapp.com/v1/insta')
      .then(response => response.json())
      .then(function(json) {
        return json.data.map(function(post) {
          return post.images.low_resolution.url
        })
      })
      .then(urls => this.setState({ urls: urls }))
    }
  }
