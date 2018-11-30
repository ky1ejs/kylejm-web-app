import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  overflow-x: scroll;
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  align-self: flex-end;
  &::-webkit-scrollbar {
    display: none;
  }
`

export default class InstaSection extends Component {
  state = { posts: [] }

  componentDidMount() {
      fetch('https://kylejm.herokuapp.com/v1/insta')
      .then(response => response.json())
      .then((json) => json.data)
      .then((posts) => this.setState({ posts: posts }))
    }

  render() {
    return (
      <Wrapper>
        {
          this.state.posts.map((post) => <InstaImage post={post} />)
        }
      </Wrapper>
    );
  }
}

class InstaImage extends Component {
  state = { hovered: false }

  handleMouseHover = () => {
    this.setState({ hovered: !this.state.hovered });
  }

  click = () => {
    window.open(this.props.post.link)
  }

  render() {
    const imageUrl = this.props.post.images.low_resolution.url
    return (
      <InstaImageContainer onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} onClick={this.click}>
        <Image key={imageUrl} src={imageUrl} />
        { 
          this.state.hovered && 
          <ImageInfo>
            <p>{this.props.post.caption.text}</p>
          </ImageInfo>
        }
      </InstaImageContainer>
    )
  }
}

const InstaImageContainer = styled.div`
  margin: 0 20px;
  min-height: 250px;
  min-width: 250px;
  max-height: 250px;
  max-width: 250px;
  position: relative;
  cursor: pointer;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ImageInfo = styled.div`
  background-color: green;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  p {
    margin: 20px 30px;
  }
`