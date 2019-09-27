import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './header/Header'
import LandingView from '../views/landingView/LandingView'
import ProjectsView from '../views/projectsView/ProjectsView'
import AboutView from '../views/aboutView/AboutView'
import TasksView from '../views/tasksView/TasksView'
import { Container } from 'semantic-ui-react'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <main className='container'>
          <Container id='main-panel'>
            <Route path='/' exact component={ LandingView } />
            <Route path='/projects' exact component={ ProjectsView } />
            <Route path='/projects/:id/tasks' exact component={ TasksView } />
            <Route path='/about' exact component={ AboutView } />
          </Container>
        </main>
    </BrowserRouter>
  )
}

export default App