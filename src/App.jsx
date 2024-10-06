
import './App.css'
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png"
import { useEffect, useState } from 'react';

const oldTasks = localStorage.getItem("tasks");
function App() {
    const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
    const [activeCard, setActiveCard] = useState(null);
  
    console.log(tasks);
  
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
  
    const handleDelete = (taskIndex) => {
      const newTasks = tasks.filter((task, index) => index !== taskIndex);
      setTasks(newTasks);
    };
  
    const onDrop = (status, position) => {
      console.log(
        `${activeCard} is going to place into ${status} and at the position ${position}`
      );
  
      if (activeCard == null || activeCard === undefined) return;
  
      const taskToMove = tasks[activeCard];
      const updatedTasks = tasks.filter((task, index) => index !== activeCard);
  
      updatedTasks.splice(position, 0, {
        ...taskToMove,
        status: status,
      });
  
      setTasks(updatedTasks);
      console.log(updatedTasks);
    };
 return (
  <div className='app'>
    <TaskForm setTasks={setTasks}/>
    <main className="flex flex-col justify-center  lg:flex-row lg:justify-between  lg:mt-5">

        <TaskColumn title="To do"
        icon={todoIcon} tasks={tasks}  status="todo" handleDelete={handleDelete} setActiveCard={setActiveCard}
        onDrop={onDrop}/>

<TaskColumn title="Doing"
        icon={doingIcon} tasks={tasks}  status="doing" handleDelete={handleDelete} setActiveCard={setActiveCard}
        onDrop={onDrop}/>


<TaskColumn title="Done"
        icon={doneIcon} tasks={tasks}  status="done" handleDelete={handleDelete} setActiveCard={setActiveCard}
        onDrop={onDrop}/>
    </main>
  </div>
 )
}

export default App
