import React from 'react'
import { Card } from 'semantic-ui-react'

class TaskCard extends React.Component {

  render() {
    const {id, name, description, storyPoints, workedHours, state} = this.props
    return (
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default TaskCard