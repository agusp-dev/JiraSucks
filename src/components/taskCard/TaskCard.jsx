import React from 'react'
import StateData from './StateData'
import { Card, Divider, Grid, Image, Button } from 'semantic-ui-react'
import './TaskCard.css'
import ic_send from '../../assets/icons/ic_send.png'

const labels = {
  textContent: 'left'
}

const sendImg = {
  textAlign: 'center'
}

class TaskCard extends React.Component {

  onHandleSendButton = e => {
    console.log('onHandleSendButton')
  }

  render() {
    const {id, name, description, storyPoints, workedHours, state} = this.props
    return (
      <Card color='grey'>
        <Card.Content style={labels}>
          <Card.Header>
            <Grid>
              <Grid.Column floated='left' width={10}>
                {name}
              </Grid.Column>
              <Grid.Column floated='center' width={4}>
                <img 
                  style={sendImg} 
                  width='20px'
                  src={ic_send} 
                  alt="send"
                  onClick={this.onHandleSendButton}/>
              </Grid.Column>
            </Grid>
          </Card.Header>
          <Card.Description>{description}</Card.Description>
          <Divider />
          <StateData />
        </Card.Content>
      </Card>
    )
  }
}

export default TaskCard