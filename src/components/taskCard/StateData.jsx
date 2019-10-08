import React from 'react'
import { Card, Divider, Label, Icon, Grid, Image } from 'semantic-ui-react'

import ic_storypoints from '../../assets/icons/ic_storypoints.png'
import ic_planned_hours from '../../assets/icons/ic_planned_hours.png'
import ic_worked_hours from '../../assets/icons/ic_worked_hours.png'

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

const StateData = ( storyPoints, plannedHours, workedHours ) => {

  return (
    <div>
      <Grid columns={3}>
        {
          storyPoints && (
            <Grid.Column style={labelContainer}>
              <Image src={ic_storypoints} style={imgSize} />
              <span style={dataLabels}>10</span>
            </Grid.Column>
          )
        }

        {
          plannedHours && (
            <Grid.Column style={labelContainer}>
              <Image src={ic_planned_hours} style={imgSize} />
              <span style={dataLabels}>12</span>
            </Grid.Column>
          )
        }

        {
          workedHours && (
            <Grid.Column style={labelContainer}>
              <Image src={ic_worked_hours} style={imgSize} />
              <span style={dataLabels}>14</span>
            </Grid.Column>
          )
        }
        </Grid>
    </div>
  )
}

export default StateData