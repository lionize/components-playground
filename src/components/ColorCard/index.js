import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 1.5em;
  margin: 1em;
  border-radius: 10px;
  border: 1px solid #eee;
  width: 300px;
  position: relative;
  box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
`

const Category = styled.span`
  display: block;
  color: ${props => props.color || 'tomato'};
  font-weight: lighter;
  font-size: 0.9rem;
  margin-bottom: 0.2em;
`

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  margin-top: 0.3em;
  margin-bottom: 0.2em;
`

const Body = styled.p`
  font-size: 0.8rem;
  color: #888;
  line-height: 1.5;
`

const ColorBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  border-radius: 0 0 10px 10px;

  background-color: ${props => {
    console.log(props.color)
    return props.color || 'tomato'}};

  width: 100%;
  height: 5px;
`

const ColorCard = ({ color, category, title, body }) => (
  <Wrapper>
    <Category color={color}>{category}</Category>
    <Title>{title}</Title>
    <Body>{body}</Body>
    <ColorBar color={color}>&nbsp;</ColorBar>
  </Wrapper>
)

export default ColorCard
