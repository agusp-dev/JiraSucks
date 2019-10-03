import React from 'react'
import { TasksView as CTasksView } from '../../components'

class TasksView extends React.Component {

  render() {
    return (
      <CTasksView data={this.props.location.state}/>
    )
  }
}

export default TasksView