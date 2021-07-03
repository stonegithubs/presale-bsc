import React from 'react'
import styled from 'styled-components'

import Container from '../Container'

interface PageHeaderProps {
  maintitle?: string
  subtitle?: string
  title?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ maintitle, subtitle, title }) => {
  return (
    <Container size="sm">
      <StyledPageHeader>
        <StyledMainTitle>{maintitle}</StyledMainTitle>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[4]}px;
  padding-top: ${(props) => props.theme.spacing[2]}px;
  margin: 0 auto;
  font-size: 27px;
  @media (max-width: 767px) {
    padding-top: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledMainTitle = styled.div`
  font-family: "Nunito";
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  flex: 1 1 0%;
  line-height: 15px;
  text-align: center;
  @media (max-width: 767px) {
  }
`

const StyledTitle = styled.div`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  padding: 16px 0px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
   @media (max-width: 767px) {
  }
`

const StyledSubtitle = styled.div`
  font-family: "IBM Plex Mono";
    font-style: normal;
    font-weight: normal;
    width: fit-content;
    font-size: 14px;
    line-height: 18px;
    margin: auto;
    color: rgba(0, 0, 0, 0.4);
    text-align: center;
    cursor: pointer;
    overflow-wrap: anywhere;
  @media (max-width: 767px) {
  }
`

export default PageHeader
