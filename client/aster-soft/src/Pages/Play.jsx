import React from 'react'
import './play.css'
import CommandContainer from '../Containers/CommandContainer'
import LogboxContainer from '../Containers/LogboxContainer'
import StateContainer from '../Containers/StateContainer'

const Play = () => {
  return (
    <div id="play-background">
    <CommandContainer></CommandContainer>
    <LogboxContainer></LogboxContainer>
    <StateContainer></StateContainer>
    </div>
  )
}

export default Play