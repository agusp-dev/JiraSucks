import React from 'react'
import ProjectCard from '../projectCard/ProjectCard'
import { fakeDb } from '../../utils'
import { Card } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'


class ProjectList extends React.Component {

  state = {
    projects: []
  }

  onProjectSelected = ( id, name ) => {    
    this.props.history.push(
      `/projects/${id}/tasks`, 
      { projectId: id, projectName: name }
    )
  }

  componentDidMount() {
    this.setState({ projects: fakeDb.getProjectList() })
  }

  render() {
    return (
      <Card.Group>
        {this.state.projects && this.state.projects.length > 0
          ? (
            this.state.projects.map( project => {
              return (
                <ProjectCard
                  key={project.id}
                  id={project.id} 
                  name={project.name} 
                  description={project.description}
                  onProjectSelected={this.onProjectSelected}/>
              )
            })
          )
          : (
            <div>
              <p>No projects</p>
            </div>
          )
        }
      </Card.Group>
    )
  }
}

export default withRouter(ProjectList)