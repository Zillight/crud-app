export default function Task (props) {
    return (
        <div className='task'>
              <h1>{props.taskName}</h1>
              <button>✔︎</button>
              <button onClick={()=> props.deleteTask(props.id)}> X </button>
            </div>
    )
}