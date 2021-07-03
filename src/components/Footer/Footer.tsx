import React from 'react'
import styled from 'styled-components'

import Nav from './components/Nav'

const Footer: React.FC = () => (
  <StyledFooter>
    <StyledFooterInner>
      <Nav />
    </StyledFooterInner>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  // align-items: start;
  // display: flex;
  padding-top: 4%;
  justify-content: center;
`
const StyledFooterInner = styled.div`
  align-items: start;
  display: flex;
  justify-content: center;
  height: 30px;
  width: 100%;
`

export default Footer