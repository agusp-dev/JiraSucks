import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Button, Image, Icon } from 'semantic-ui-react'
import './Header.css'

class Header extends React.Component {

  render() {
    return (
      <Menu inverted id='header-menu'>

        <div className='item'>
          <img 
            src='https://cdn.freebiesupply.com/logos/large/2x/jira-logo-black-and-white.png' 
            alt='jira'
            />
        </div>
        <Link
          className='item' 
          to='/projects'>
            Projects
        </Link>
        <Link
          className='item' 
          to='/about-us'>
            About Us
        </Link>
        <div className='right menu item'>
          <Image src='https://randomuser.me/api/portraits/men/41.jpg' 
            avatar />
          <span id='username'>John Doe</span>
          <Icon id='btn-more' name='sort down' />
        </div>

      </Menu>
    )
  }

}

export default Header