import React from 'react'
import { Container, Segment, Grid, Header } from 'semantic-ui-react'
import './Footer.css'

class Footer extends React.Component {
  
  render() {
    return (
      <footer>
        <Segment id='footer' vertical inverted>
          <span id='jirasucks'>JIRASUCKS</span>
          <span id='copyright'>Copyright © 2019. All Rights Reserved</span>
        </Segment>
      </footer>
    )
  }
}

export default Footer