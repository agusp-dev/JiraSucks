import React from 'react'
import { Card } from 'semantic-ui-react'

class ProjectCard extends React.Component {
  
  render() {
    const {name, description} = this.props
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

export default ProjectCard