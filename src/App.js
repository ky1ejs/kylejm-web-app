import React, { Component } from 'react'
import IntroSection from './IntroSection'
import InstaSection from './InstaSection'
import Footer from './Footer.js'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <IntroSection />
        <InstaSection />
        <Footer />
      </div>
    )
  }
}
