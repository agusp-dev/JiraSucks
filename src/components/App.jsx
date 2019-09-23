import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './landing/LandingPage'
import Projects from './projects/Projects'
import Tasks from './tasks/Tasks'
import Header from './header/Header'
import AboutUs from './aboutUs/AboutUs'

const App = () => {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <div className='ui container'>
            <Route path='/' exact component={ LandingPage } />
            <Route path='/projects' exact component={ Projects } />
            <Route path='/about-us' exact component={ AboutUs } />
            <Route path='/tasks' exact component={ Tasks } />
          </div>
        </BrowserRouter>
      </div>
    )
}

export default App