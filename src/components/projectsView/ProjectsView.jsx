import React from 'react'
import ProjectList from '../../components/projectList/ProjectList'
import { fakeDb } from '../../utils/fakeDb'
import { 
  Button, Grid, Modal, Form,
   Input, Message, TextArea
} from 'semantic-ui-react'


class ProjectsView extends React.Component {
  
  state = {
    createProjectModalOpen: false,
    showMissingParametersMsg: false
  }

  openModal = () => {
    this.showMissingParameters(false)
    this.toggleCreateProjectModal(true)
  }

  closeModal = () => {
    this.toggleCreateProjectModal(false)
  }

  toggleCreateProjectModal = open => {
    this.setState({ createProjectModalOpen: open })
  }

  onHandleCreateProjectSubmit = e => {
    e.preventDefault()
    this.showMissingParameters(false)
    const name = e.target.name.value
    const description = e.target.description.value
    if (!name || !description) { return this.showMissingParameters(true) }
    fakeDb.insertProject({ name, description })
    this.closeModal()
  }

  showMissingParameters = show => {
    this.setState({ showMissingParametersMsg: show })
  }

  render() {
    const { createProjectModalOpen, showMissingParametersMsg } = this.state
    return (
      <div>
        <Grid divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column textAlign='left'>
              <h2>My Projects</h2>
            </Grid.Column>
            <Grid.Column textAlign='right'>
              <Button 
                color='orange'
                onClick={this.openModal}>
                New Project
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <ProjectList />

        <Modal 
          closeIcon
          size='tiny' 
          open={createProjectModalOpen} 
          onClose={this.closeModal} >
            <Modal.Header>Create Project</Modal.Header>
            <Modal.Content>
              <p>Please, enter required data</p>
              <Form 
                id='createProjectForm' 
                onSubmit={this.onHandleCreateProjectSubmit}>
                <Form.Field>
                  <Input
                    type='text'
                    name='name' 
                    placeholder='Project Name' />
                </Form.Field>
                <Form.Field>
                  <TextArea 
                    type='text'
                    name='description'
                    rows='4'
                    placeholder='Project Description...' />
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
                form='createProjectForm'
                content='Save'/>
            </Modal.Actions>
        </Modal>

      </div>
    )
  }
}

export { ProjectsView }