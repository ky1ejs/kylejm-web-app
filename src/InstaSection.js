import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: calc(80% + 100px);
  display: flex;
  overflow-x: scroll;
  align-self: flex-end;
  margin-top: 25px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Image = styled.div`
  height: 250px;
  min-width: 250px;
  display: inline-block;
  background-image: url(${props => props.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  &:not(:first-child) {
    margin: 0 20px;
  }
`;

export default class InstaSection extends Component {
  state = { urls: [] };

  componentDidMount() {
    fetch("https://kylejm.herokuapp.com/v1/insta")
      .then(response => response.json())
      .then(json => json.data.map(post => post.images.low_resolution.url))
      .then(urls => this.setState({ urls: urls }));
  }

  render() {
    return (
      <Wrapper>
        {this.state.urls.map(url => (
          <Image key={url} src={url} />
        ))}
      </Wrapper>
    );
  }
}
