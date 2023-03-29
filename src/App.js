import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0? 1 : todoList[todoList.length -1].id +1 ,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task)=> {
        if (task.id === id) {
          return {...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return ( 
  <div className="App">
    <h1>ToDo List:</h1>
    <div className="addTask">
      <br></br>
    <input onChange={handleChange}/>
    <br></br><br></br>

    <button onClick={addTask}> Add Task </button> 
    </div>
    <div className="list"> 
    {todoList.map((task) => {
      return <Task taskName={task.taskName} id={task.id} completed={task.completed} deleteTask={deleteTask} completeTask={completeTask} />;
    })}
    </div>
    <div className="footer">Todo List created by Hannah Ladd<br></br><a href="https://github.com/hdaladd">Github</a></div>
  </div>
  );
}

export default App;
