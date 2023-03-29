export const Task = (props) => {
    return (
        <div className="task"
        style={{textDecorationLine:  props.completed ? "line-through" : "normal",backgroundColor: props.completed ? "gray" : "000000", fontFamily: props.completed ? "'Courier New'" : "'American Typewriter'", color: props.completed ? "black" : "white" }}>
          <p>{props.taskName}</p>
          <button onClick={() => props.completeTask(props.id)}> Completed </button>
          <button onClick={() => props.deleteTask(props.id)}> X </button>  
        </div>
    );
 };