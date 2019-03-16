import React, { Component } from 'react'
import styled from 'styled-components'
import { InstaPost, getInstaPosts } from '../services/instagram'
import { MoonLoader } from 'react-spinners'

const Wrapper = styled.div`
  overflow-x: scroll;
  margin: 20px 0;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0 25px;
  min-height: 250px;
`

const InstaImageLoaderContainer = styled.div`
  height: 250px;
  position: relative;
  flex: 1 0 250px;
  border-radius: 5px;
  overflow: hidden;

  &:not(:first-child) {
    margin-left: 20px;
  }
`

const SpinnerContainer = styled.div`
  position: absolute;
  left: 100px;
  top: 100px;
`

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
  opacity: 0;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  p {
    margin: 20px 30px;
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
    const { posts } = this.state
    if (posts.length === 0) {
      for (var i = 0; i < 10; i++) {
        elements.push(<InstaImageLoader key={i} />)
      }
    } else {
      elements = posts.map((post: InstaPost) => <InstaImage key={post.lowRes} {...post} />)
    }
    return <Wrapper> {elements} </Wrapper>
  }
}

const InstaImage = ({ caption, lowRes, link }: InstaPost) => (
  <InstaImageContainer onClick={() => window.open(link)}>
    <Image src={lowRes} />
    <ImageInfo>
      <p>{caption}</p>
    </ImageInfo>
  </InstaImageContainer>
)

const InstaImageLoader = () => (
  <InstaImageLoaderContainer>
    <SpinnerContainer>
      <MoonLoader sizeUnit={'px'} size={50} color={'#123abc'} loading={true} />
    </SpinnerContainer>
  </InstaImageLoaderContainer>
)
