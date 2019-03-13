import React, { Component } from 'react'
import styled from 'styled-components'
import ContentContainer from './ContentContainer.js'
import { InstaPost, getInstaPosts } from './instagram'
import { MoonLoader } from 'react-spinners'

const Wrapper = styled.div`
  overflow-x: scroll;
  margin: 20px 0;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
`

interface InstaSectionState {
  posts: InstaPost[]
}

export default class InstaSection extends Component<{}, InstaSectionState> {
  state = { posts: [] }

  async componentDidMount() {
    let posts = await getInstaPosts()
    this.setState({ posts }) 
  }

  render() {
    let elements: JSX.Element[] = []
    if (this.state.posts.length === 0) {
      for (var i = 0; i < 10; i++) { elements.push(<InstaImageLoader />); }
    } else {
      elements = this.state.posts.map(post => <InstaImage {...post} />);
    }
    return (
      <ContentContainer>
      <Wrapper> {elements} </Wrapper>
      </ContentContainer>
    );
  }
}

class InstaImage extends Component<InstaPost> {
  state = { hovered: false }

  handleMouseHover = () => {
    this.setState({ hovered: !this.state.hovered });
  }

  click = () => {
    window.open(this.props.link)
  }

  render() {
    const imageUrl = this.props.lowRes
    return (
      <InstaImageContainer onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} onClick={this.click}>
        <Image key={imageUrl} src={imageUrl} />
        {
          this.state.hovered && 
          <ImageInfo>
            <p>{this.props.caption}</p>
          </ImageInfo>
        }
      </InstaImageContainer>
    )
  }
}

class InstaImageLoader extends Component {
  render() {
    return (
      <InstaImageLoaderContainer>
        <SpinnerContainer>
          <MoonLoader
            sizeUnit={"px"}
            size={50}
            color={"#123abc"}
            loading={true}
          />
        </SpinnerContainer>
      </InstaImageLoaderContainer>
    );
  }
}

const InstaImageLoaderContainer = styled.div`
  height: 250px;
  position: relative;
  flex: 1 0 250px;
  border-radius: 5px;
  overflow: hidden;

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

const SpinnerContainer = styled.div`
  position: absolute;
  left: 100px;
  top: 100px;
`;

const InstaImageContainer = styled.div`
  height: 250px;
  position: relative;
  flex: 1 0 250px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 20px;
  }
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

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