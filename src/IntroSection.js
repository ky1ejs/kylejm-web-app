import React, { Component } from 'react'
import profilePhoto from './profile_photo.jpeg';
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  height: 400px;
  width: 100%;
`

const PurpleBox = styled.div`
    width: 80%;
    height: 400px;
    background-color: #927CDB;
`;

const WhiteBox = styled.div`
    width: 20%;
`;

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(20% - 100px);

  img {
    border-radius: 50%;
    height: 200px;
    width: 200px;
  }
`;

const NameHeading = styled.div`
  margin-left: 25px;
  h2, h4 {
    color: #fff;
    margin: 0;
  }
  h2 {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;


export default class IntroSection extends Component {
  render() {
    return (
      <Container>
        <WhiteBox />
        <PurpleBox />
        <IntroContainer>
          <img src={profilePhoto} alt="logo" />
          <NameHeading>
            <h2>Kyle McAlpine</h2>
            <h4>Engineering &amp; Product</h4>
          </NameHeading>
        </IntroContainer>
      </Container>
    )
  }
}
