import React from 'react'
import styled from 'styled-components'

import { hexToRgb } from '../../utils'
import dollar from './dollar.png'

const Wrapper = styled.div`
  width: 350px;
  background-image: url(${props => props.image}), radial-gradient(circle farthest-corner at 0px 0px, #FE7146 0%, #FE479C 100%);
  background-repeat: no-repeat;
  background-size: 100px 100px, cover;
  background-position: 95% center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  margin: 1em;
  padding: 1.5em 1.2em;
  color: white;
  box-shadow: 0 3px 4px 0 ${hexToRgb('#FE479C', 0.5)};
`

const Category = styled.div`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 0.7rem;
  margin-bottom: 0.5em;
  letter-spacing: 1px;
`

const Amount = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 1em;
  margin-bottom: 0.3em;
  letter-spacing: 2px;
`

const ChangeWrapper = styled.div`
  display: flex;
  font-size: 0.7rem;
  font-weight: 400;
  letter-spacing: 1px;
`

const Change = styled.div``

const Symbol = styled.span`
  margin-left: 0.7em;
  font-weight: bolder;
`

const GradientCard = () => (
  <Wrapper image={dollar}>
    <Category>Revenue</Category>
    <Amount>&#8377; 5,50,489.00</Amount>
    <ChangeWrapper>
      <Change>&#8377; 50,000.00</Change>
      <Symbol>&#x2191;</Symbol>
    </ChangeWrapper>
  </Wrapper>
)

export default GradientCard
