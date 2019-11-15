// Luke Mitchell <hi@lukemitchell.co>
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

const MobileOnly = ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
)

export default MobileOnly
