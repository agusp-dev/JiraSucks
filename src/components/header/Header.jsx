import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import './Header.css'

class Header extends React.Component {

  state = { activeItem: 'Projects' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu secondary inverted id='header-menu'>

        <Menu.Item>
          THIS IS A LOGO
        </Menu.Item>

        <Menu.Item
          name='Projects'
          active={activeItem === 'Projects'}
          onClick={this.handleItemClick}>
        </Menu.Item>

        <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item
            name='loggedUser'
            active={activeItem === 'loggedUser'}
            onClick={this.handleItemClick}>
            <Image src='https://randomuser.me/api/portraits/men/41.jpg' 
              avatar/>
            <span id='username'>John Doe</span>
          </Menu.Item>
        </Menu.Menu>

      </Menu>
    )
  }

}

export default Header