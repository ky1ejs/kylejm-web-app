import React, { Component } from 'react'
import profilePhoto from '../assets/profile_photo.jpeg'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  height: 400px;
  width: 100%;
  @media (max-width: 524px) {
    height: 250px;
    margin-bottom: 125px;
  }
`

const PurpleBox = styled.div`
  width: 80%;
  height: 100%;
  background-color: #927cdb;
  @media (max-width: 524px) {
    width: 100%;
  }
`

const WhiteBox = styled.div`
  width: 20%;
  @media (max-width: 524px) {
    display: none;
  }
`

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(20% - 100px);

  @media (max-width: 524px) {
    left: 0;
    width: 100%;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
  }

  img {
    border-radius: 50%;
    width: 200px;
    @media (max-width: 524px) {
      transform: translateY(50%);
    }
  }
`

const NameHeading = styled.div`
  margin-left: 25px;
  h2,
  h4 {
    color: #fff;
    margin: 0;
  }
  h2 {
    font-weight: bold;
    margin-bottom: 10px;
  }
  @media (max-width: 524px) {
    margin: 0;
    text-align: center;
    transform: translateY(130%);
  }
`

export default class IntroSection extends Component {
  render() {
    return (
      <Container>
        <WhiteBox />
        <PurpleBox />
        <IntroContainer>
          <img src={profilePhoto} alt='logo' />
          <NameHeading>
            <h2>Kyle McAlpine</h2>
            <h4>Engineering &amp; Product</h4>
          </NameHeading>
        </IntroContainer>
      </Container>
    )
  }
}
