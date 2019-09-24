import React from 'react'
import { Container, Card, Button, Item, Grid } from 'semantic-ui-react'
import ProjectCard from '../projectCard/ProjectCard'
import './ProjectList.css'

class ProjectList extends React.Component {

  data = [
    { name:'Project 1', description:'Description 1' },
    { name:'Project 2', description:'Description 2' },
    { name:'Project 3', description:'Description 3' },
    { name:'Project 4', description:'Description 4' },
    { name:'Project 5', description:'Description 5' },
    { name:'Project 6', description:'Description 6' }
  ]

  render() {
    return (
      <Container >

        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column textAlign='left'>
              <h2>My Projects</h2>
            </Grid.Column>
            <Grid.Column textAlign='right'>
              <Button color='orange'>New Project</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        <Card.Group>
          {this.data.map( project => {
            return (
              <ProjectCard 
                name={project.name} 
                description={project.description}/>
            )
          })}
        </Card.Group>
      </Container>
    )
  }
}

export default ProjectList