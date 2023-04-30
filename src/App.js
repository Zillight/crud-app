import './App.css';
import {useState} from "react"
import Task from "./component/Task"
function App() {
  const [todo, setTodo] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }
  const addTask = () => {
    const task = {
      id: todo.length === 0 ? 1 : todo[todo.length-1].id + 1,
      taskName: newTask,
    }
    setTodo([...todo, task])
  }
  const deleteTask = (id) => {
    setTodo(todo.filter(task => task.id !== id))
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todo.map(task => {
          return ( 
            <Task 
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
            />
          )})}
      </div>
    </div>
  );
}

export default App;
