import React, { Component } from 'react'
import styled from 'styled-components'

export default class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <p>
          Built and designed by me.
        </p>
        <p>
          You can view the frontend source <a href="https://github.com/kylejm/kylejm-web-app">here</a> and the backend source <a href="https://github.com/kylejm/kylejm-backend">here</a>.
        </p>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-color: #927CDB;
  width: 100%;
  height: 150px;
  color: #fff;
`