// Luke Mitchell <hi@lukemitchell.co>
import React from 'react'
import styled from 'styled-components'

const getMobileSize = (props) => {
  return props.theme.mobileSize || props.mobileSize || '768px'
}

const Container = styled.div`
  @media (min-width: ${getMobileSize}) {
    display: none;
  }
`

const MobileOnly = ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
)

export default MobileOnly
