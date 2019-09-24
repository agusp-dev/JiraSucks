import React from 'react'
import { Container } from 'semantic-ui-react'
import ProjectList from '../../components/projectList/ProjectList'

class ProjectsView extends React.Component {

  render() {
    return (
      <Container>
        <ProjectList />
      </Container>
    )
  }
}

export default ProjectsView