import React, { useState } from 'react'
import AddNewTask from './compoents/AddNewTask'
import Header from './compoents/Header'
import Tasks from './compoents/Tasks'
import demoTask from './data/demoTasks'

const App = () => {
  const [tasks, setTask] = useState(demoTask);
  const [input, setInput] = useState('');
  const [taskForEdit, setEditTask] = useState(null);
  const deleteTask = (id) => {
    setTask(tasks.filter((task) => {
      return task.id !== id
    }))
  }

  const addTask = (task) => {
    const id = tasks.length + 1;
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  }

  const editTask = (task) => {
    setEditTask(task);
  }
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-sm-4 offset-4 border p-2 ' >
            <Header title={'Todo List'} />
            <AddNewTask addTask={addTask} input={input} setInput={setInput} tasks={tasks} editTask={taskForEdit} setEditTask={setEditTask} setTask={setTask} />
            {tasks.length > 0 ?
              <Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />
              : 'No Tasks to show'
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App