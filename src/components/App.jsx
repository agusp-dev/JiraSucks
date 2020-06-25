import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './header/Header'
import LandingView from '../views/landingView/LandingView'
import ProjectsView from '../views/projectsView/ProjectsView'
import AboutView from '../views/aboutView/AboutView'
import TasksView from '../views/tasksView/TasksView'
import Footer from './footer/Footer'
import { Container } from 'semantic-ui-react'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={ LandingView } />
      <Header />
      <main >
        <Container id='main-panel'>
          <Route path='/projects' exact component={ ProjectsView } />
          <Route path='/projects/:id/tasks' exact component={ TasksView } />
          <Route path='/about' exact component={ AboutView } />
        </Container>
      </main>
      <Footer id='footer'/>
    </BrowserRouter>
  )
}

export default App