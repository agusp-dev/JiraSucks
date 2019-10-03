import React from 'react'
import TaskList from '../../components/taskList/TaskList'
import { Grid, Button } from 'semantic-ui-react'
import { fakeDb } from '../../utils'
import { states } from '../../utils/states'

class TasksView extends React.Component {

  state = {
    projectData: {},
    tasks: []
  }

  componentDidMount() {
    this.setState({ 
      projectData: { ...this.props.data },
      tasks: this.getTasks(this.props.data.projectId)
    })
  }

  //Get project all tasks from db
  getTasks = projectId => {
    return fakeDb.getTasksByProject(projectId)
  }

  //Filter tasks by state (not db)
  getTasksByState = state => {
    if (!this.state.tasks) return []
    return this.state.tasks.filter( task => {
      return task.state === state
    })
  }
 
  render() {
    //console.log('taskview render', this.state)
    return (
      <div>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column textAlign='left'>
              <h2>{ this.state.projectData.projectName }</h2>
            </Grid.Column>
            <Grid.Column textAlign='right'>
              <Button 
                color='orange'>
                New Task
              </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={4}>
            <Grid.Column textAlign='center'>
              <TaskList 
                listName='To Do'
                backgroundColor='#E68080'
                borderColor='#B90000'
                tasks={ this.getTasksByState( states.TODO ) }/>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <TaskList 
                listName='In Progress'
                backgroundColor='#F5D470'
                borderColor='#EBAC1F'
                tasks={ this.getTasksByState( states.IN_PROGRESS ) }/>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <TaskList
                listName='Done'
                backgroundColor='#97C284'
                borderColor='#4D8D36'
                tasks={ this.getTasksByState( states.DONE ) }/>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <TaskList 
                listName='In Jira'
                backgroundColor='#77AAD7'
                borderColor='#2768B1'
                tasks={ this.getTasksByState( states.IN_JIRA ) }/>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    )
  }
}

export { TasksView }