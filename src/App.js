import React, { Component } from 'react'
import IntroSection from './IntroSection.js'
import InstaSection from './InstaSection.js'
import styled from 'styled-components'

const Container = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export default class App extends Component {
  render() {
    return (
      <Container>
        <IntroSection />
        <InstaSection />
      </Container>
    )
  }
}
