import React from 'react'
import { Card } from 'semantic-ui-react'

class ProjectCard extends React.Component {
  
  render() {
    const {id, name, description, onProjectSelected} = this.props
    return (
      <Card
        onClick={() => onProjectSelected(id)}>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default ProjectCard