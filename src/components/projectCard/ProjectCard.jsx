import React from 'react'
import { Card, Divider, Label, Icon, Grid, Image } from 'semantic-ui-react'
import ic_todo from '../../assets/icons/ic_todo.png'
import ic_in_progress from '../../assets/icons/ic_in_progress.png'
import ic_done from '../../assets/icons/ic_done.png'
import ic_jira from '../../assets/icons/ic_jira.png'

const dataLabels = {
  fontSize: '14px',
  color: '#424242'
}

const labelContainer = {
  padding: '8px 0px',
  textAlign: 'center'
}

const imgSize = {
  width: '24px',
  height: '24px',
  marginRight: '2px'
}

class ProjectCard extends React.Component {
  
  render() {
    const {id, name, description, onProjectSelected} = this.props
    return (
      <Card color='grey'
        onClick={() => onProjectSelected(id, name)}>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Description>{description}</Card.Description>
          
          <Divider />

          <Grid columns={4}>

            <Grid.Column style={labelContainer}>
              <Image src={ic_todo} style={imgSize} />
              <span style={dataLabels}>10</span>
            </Grid.Column>

              <Grid.Column style={labelContainer}>
                <div>
                  <Image src={ic_in_progress} style={imgSize} />
                  <span style={dataLabels}>10</span>
                </div>
              </Grid.Column>

              <Grid.Column style={labelContainer}>
                <div>
                  <Image src={ic_done} style={imgSize} />
                  <span style={dataLabels}>10</span>
                </div>
              </Grid.Column>

              <Grid.Column style={labelContainer}>
                <div>
                  <Image src={ic_jira} style={imgSize} />
                  <span style={dataLabels}>10</span>
                </div>
              </Grid.Column>

          </Grid>

        </Card.Content>
      </Card>
    )
  }
}

export default ProjectCard