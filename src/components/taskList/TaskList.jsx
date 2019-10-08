import React from 'react'
import TaskCard from '../../components/taskCard/TaskCard'
import { Card, Header, Icon } from 'semantic-ui-react'
import './TaskList.css'
import { isEqual } from 'lodash'

const headerStyle = (bgColor, boColor) => {
  return {
    backgroundColor: bgColor,
    border: `1px solid ${boColor}`,
    borderRadius: 4,
    padding: '8px 16px',
    textAlign: 'center'
  }
}

class TaskList extends React.Component {

  state = {
    tasks: []
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (!isEqual(this.state.tasks, nextProps.tasks)) {
      this.setState({ tasks: nextProps.tasks })
    }
  }

  render() {
    const { listName, backgroundColor, borderColor, icon } = this.props
    const { tasks } = this.state
    return (

      <div>
        <div style={headerStyle(backgroundColor, borderColor)}>
          <Header 
            id='title' 
            as='h3' 
            content={listName}
            inverted/>
        </div>

        <div id='task-list'>
          {tasks && tasks.length > 0
            ? (
              <Card.Group itemsPerRow='one'>
                {tasks.map( task => {
                  return (
                    <TaskCard 
                      key={task.id}
                      id={task.id}
                      name={task.name}
                      description={task.description}
                    />
                  )
                })}
              </Card.Group>
            )
            : <p>No Tasks</p>
          }
        </div>
      </div>
    )
  }
}

export default TaskList