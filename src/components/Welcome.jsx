import React from 'react'
import { Header } from 'semantic-ui-react'

const Welcome = () => 
  (
    <>
    <Header data-cy='header' textAlign='center' size='huge'>
      Rock Paper Scissor
    </Header>
    <Header data-cy='score' textAlign='center' size='large'>
      Score
    </Header>
    </>
  )


export default Welcome