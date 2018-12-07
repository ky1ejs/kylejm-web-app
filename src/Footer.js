import React, { Component } from 'react'
import styled from 'styled-components'
import ContentContainer from './ContentContainer.js'

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <ContentContainer>
          <OptionsWrapper>
            <p>
              Resumè
            </p>
            <p>
              Blog
            </p>
            <p>
              Contact
            </p>
          </OptionsWrapper>
          <p>
            Site built and designed by me. 
          </p>
          <p>
            Frontend source <a href="https://github.com/kylejm/kylejm-web-app">here</a>.
          </p>
          <p>
            Backend source <a href="https://github.com/kylejm/kylejm-backend">here</a>.
          </p>
        </ContentContainer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-color: #927CDB;
  width: 100%;
  color: #fff;
  padding: 10px 0;

  p {
    margin: 0;
    font-size: 10pt;
  }
`

const OptionsWrapper = styled.div`
  margin-bottom: 20px;
  font-weight: bold;
`