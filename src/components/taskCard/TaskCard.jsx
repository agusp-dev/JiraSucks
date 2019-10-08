import React from 'react'
import StateData from './StateData'
import { Card, Divider, Grid, Image } from 'semantic-ui-react'
import './TaskCard.css'

const labels = {
  textContent: 'left'
}

class TaskCard extends React.Component {

  render() {
    const {id, name, description, storyPoints, workedHours, state} = this.props
    return (
      <Card color='grey'>
        <Card.Content style={labels}>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description}</Card.Description>
          
          <Divider />

          <StateData />

        </Card.Content>
      </Card>
    )
  }
}

export default TaskCard