import React from 'react'
import { CardContainer } from './StatCards.style';

const StatCards = ({heading, stat, gain}) => {


  return (
    // gain property makes the font green
    <CardContainer gain={gain}>
      <p>{heading}</p>
      <h2>{stat}</h2>
    </CardContainer>
  )
}

export default StatCards