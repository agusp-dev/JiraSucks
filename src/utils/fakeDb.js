import { states } from './states'

const getProjectList = () => {
  return projectsData
}

const getProject = id => {
  if (projectsData.length < 1) return
  return projectsData.find( project => project.id === id )
}

const insertProject = project => {
  project.id = getLastId() + 1
  projectsData.push( project )
}

const getLastId = () => {
	if (!projectsData) return 0
	return Math.max.apply( Math, projectsData.map( project => project.id ) )
}

const deleteProject = id => {
  if (projectsData.length < 1) return
  projectsData = projectsData.filter( project => project.id !== id )
}

const getTasksByProject = id => {
  const project = getProject(id)
  if (!project) return []
  return getTaskList(id)
}

const getTaskList = id => {
  const projectTasks = tasksData.find( item => item.project === id )
  if (!projectTasks) return []
  return projectTasks.tasks
}







let projectsData = [
  { id: 1, name:'Project 1', description:'Project 1 description' },
  { id: 2, name:'Project 2', description:'Project 2 description' },
  { id: 3, name:'Project 3', description:'Project 3 description' },
  { id: 4, name:'Project 4', description:'Project 4 description' },
  { id: 5, name:'Project 5', description:'Project 5 description' },
  { id: 6, name:'Project 6', description:'Project 6 description' }
]

let tasksData = [
  { 
    project: 1, 
    tasks: [
      {
        id: 100,
        name: 'Task 100',
        description: 'Task 100 description',
        storyPoints: 2,
        plannedHours: 5,
        workedHours: 0,
        state: states.TODO
      },
      {
        id: 101,
        name: 'Task 101',
        description: 'Task 101 description',
        storyPoints: 2,
        plannedHours: 8,
        workedHours: 0,
        state: states.TODO
      },
      {
        id: 102,
        name: 'Task 102',
        description: 'Task 02 description',
        storyPoints: 1,
        plannedHours: 3,
        workedHours: 0,
        state: states.DONE
      }
    ] 
  },
  { 
    project: 2, 
    tasks: [
      {
        id: 140,
        name: 'Task 140',
        description: 'Task 140 description',
        storyPoints: 3,
        plannedHours: 12,
        workedHours: 0,
        state: states.TODO
      },
      {
        id: 141,
        name: 'Task 141',
        description: 'Task 141 description',
        storyPoints: 2,
        plannedHours: 6,
        workedHours: 0,
        state: states.TODO
      }
    ] 
  }
]

export const fakeDb = {
  getProjectList,
  insertProject,
  deleteProject,
  getTasksByProject
}