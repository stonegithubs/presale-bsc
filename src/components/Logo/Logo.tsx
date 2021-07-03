import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import chef from '../../assets/img/icon.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={chef} height="45" alt='logo' style={{ marginTop: -10 }} />
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 0;
  text-decoration: none;
`

export default Logo
