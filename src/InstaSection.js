import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  overflow-x: scroll;
`;

const Image = styled.img`
  margin: 0 20px;
  object-fit: contain;
  height: 250px;
  width: 250px;
`;

const getUrls = () => {
  const cache = JSON.parse(sessionStorage.getItem("instaUrls"))
  if (cache) {
    return cache.urls
  }
  return []
}

export default class InstaSection extends Component {
  state = {
    urls: getUrls()
  }  

  componentDidMount() {
      fetch('https://kylejm.herokuapp.com/v1/insta')
      .then(response => response.json())
      .then(function(json) {
        return json.data.map(function(post) {
          return post.images.low_resolution.url
        })
      })
      .then(urls => {
        this.setState({ urls: urls })
        if (urls.length > getUrls()) {
          sessionStorage.setItem("instaUrls", JSON.stringify({ urls: urls }))
        }
      })
    }

    render() {
      return (
        <Wrapper>
          {
            this.state.urls.map((url) => <Image key={url} src={url} />)
          }
        </Wrapper>
      );
    }
  }
