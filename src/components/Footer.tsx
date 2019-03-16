import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #927cdb;
  color: #fff;
  padding: 10px;

  p {
    margin: 0;
    font-size: 10pt;
  }
`

const OptionsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 20px;
  font-weight: bold;

  li {
    list-style: none;
    margin: 5px 0;
  }
`

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <OptionsWrapper>
          <li>Resumè</li>
          <li>Blog</li>
          <li>Contact</li>
        </OptionsWrapper>
        <p>Site built and designed by me.</p>
        <p>
          Frontend source <a href='https://github.com/kylejm/kylejm-web-app'>here</a>.
        </p>
        <p>
          Backend source <a href='https://github.com/kylejm/kylejm-backend'>here</a>.
        </p>
      </Wrapper>
    )
  }
}
