import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Header extends React.Component {

  render() {
    return (
      <Menu inverted>

        <div>
          <img 
            src="https://cdn.freebiesupply.com/logos/large/2x/jira-logo-black-and-white.png" 
            alt="logo"
            height='30'
            width='100'/>
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

      </Menu>
    )
  }

}

export default Header