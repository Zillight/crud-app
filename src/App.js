import './App.css';
import {useState} from "react"

function App() {
  const [todo, setTodo] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }
  const addTask = () => {
    setTodo([...todo, newTask])
  }
  const deleteTask = () => {
    
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
            <div>
              <h1>{task}</h1>
              <button onClick={deleteTask}> X </button>
            </div>
          )})}
      </div>
    </div>
  );
}

export default App;
