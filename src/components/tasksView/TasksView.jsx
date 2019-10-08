import React from 'react'
import TaskList from '../../components/taskList/TaskList'
import { Grid, Button, Modal, Form,
  Input, Message, TextArea} from 'semantic-ui-react'
import { fakeDb } from '../../utils'
import { states } from '../../utils/states'

class TasksView extends React.Component {

  state = {
    projectData: {},
    tasks: [],
    createTaskModalOpen: false,
    showMissingParametersMsg: false
  }

  openModal = () => {
    this.showMissingParametersMsg(false)
    this.toggleCreateTaskModal(true)
  }

  closeModal = () => {
    this.toggleCreateTaskModal(false)
  }

  toggleCreateTaskModal = open => {
    this.setState({ createTaskModalOpen: open })
  }

  showMissingParametersMsg = show => {
    this.setState({ showMissingParametersMsg: show })
  }

  onHandleCreateTaskSubmit = e => {
    e.preventDefault()
    this.showMissingParametersMsg(false)

    const projectId = this.props.data.projectId
    const name = e.target.name.value
    const description = e.target.description.value
    const storyPoints = e.target.storyPoints.value
    const plannedHours = e.target.plannedHours.value
    const workedHours = e.target.workedHours.value
    //const taskState = e.target.taskState.value
    const state = states.TODO

    if (!name || !description || !storyPoints || 
      !plannedHours || !workedHours) {
        return this.showMissingParametersMsg(true) 
    }

    this.insertTask({
      projectId,
      name, 
      description, 
      storyPoints, 
      plannedHours, 
      workedHours, 
      state
    })

    this.closeModal()
  }

  insertTask = task => {
    fakeDb.insertTask( task )
    console.log( 'lala', fakeDb.getTasksByProject(task.projectId) )
    this.setState({ tasks: fakeDb.getTasksByProject(task.projectId) })
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
    const { createTaskModalOpen, showMissingParametersMsg } = this.state
    return (
      <div>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column textAlign='left'>
              <h2>{ this.state.projectData.projectName }</h2>
            </Grid.Column>
            <Grid.Column textAlign='right'>
              <Button 
                color='orange'
                onClick={this.openModal}>
                New Task
              </Button>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={4}>
            <Grid.Column>
              <TaskList 
                listName='To Do'
                backgroundColor='#E68080'
                borderColor='#B90000'
                tasks={ this.getTasksByState( states.TODO ) }/>
            </Grid.Column>

            <Grid.Column>
              <TaskList 
                listName='In Progress'
                backgroundColor='#F5D470'
                borderColor='#EBAC1F'
                tasks={ this.getTasksByState( states.IN_PROGRESS ) }/>
            </Grid.Column>

            <Grid.Column>
              <TaskList
                listName='Done'
                backgroundColor='#97C284'
                borderColor='#4D8D36'
                tasks={ this.getTasksByState( states.DONE ) }/>
            </Grid.Column>

            <Grid.Column>
              <TaskList 
                listName='In Jira'
                backgroundColor='#77AAD7'
                borderColor='#2768B1'
                tasks={ this.getTasksByState( states.IN_JIRA ) }/>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Modal 
          closeIcon
          size='tiny' 
          open={createTaskModalOpen} 
          onClose={this.closeModal} >
            <Modal.Header>Create Task</Modal.Header>
            <Modal.Content>
              <p>Please, enter required data</p>
              <Form 
                id='createTaskForm' 
                onSubmit={this.onHandleCreateTaskSubmit}>
                <Form.Field>
                  <Input
                    type='text'
                    name='name' 
                    placeholder='Task Name' />
                </Form.Field>
                <Form.Field>
                  <TextArea 
                    type='text'
                    name='description'
                    rows='4'
                    placeholder='Task Description...' />
                </Form.Field>
                <Form.Field>
                  <Input 
                    type='text'
                    name='storyPoints'
                    placeholder='Task Story Points...' />
                </Form.Field>
                <Form.Field>
                  <Input 
                    type='text'
                    name='plannedHours'
                    placeholder='Task Planned Hours...' />
                </Form.Field>

                <Form.Field>
                  <Input 
                    type='text'
                    name='workedHours'
                    rows='4'
                    placeholder='Task Worked Hours...' />
                </Form.Field>
                <Form.Field>
                  <Input 
                    type='text'
                    name='taskState'
                    placeholder='Task State...' />
                </Form.Field>
                {showMissingParametersMsg && (
                  <Message
                    negative
                    content='Missing Required Parameters'
                />
                )}
              </Form>
            </Modal.Content>
            <Modal.Actions>
              <Button
                color='orange'
                icon='checkmark'
                labelPosition='right'
                type='submit'
                form='createTaskForm'
                content='Save'/>
            </Modal.Actions>
        </Modal>

      </div>
    )
  }
}

export { TasksView }