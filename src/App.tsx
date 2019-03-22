import React, { Component } from 'react'
import styled from 'styled-components'
import IntroSection from './components/IntroSection'
import InstaSection from './components/InstaSection'
import Footer from './components/Footer'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`

export default class App extends Component {
  render() {
    return (
      <Container>
        <IntroSection />
        <InstaSection />
        <Footer />
      </Container>
    )
  }
}
