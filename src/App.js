import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

// import Paragraph from './components/Paragraph'
//ACTIONS GET PASSED UP WHILE STATES GETS PASSED DOWN.
import './index.css'
function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks] = useState([
    {
      id:1,
      text:'Doctors Appointment',
      day:'Feb 5th at 2:30 pm',
      reminder: true,
    },
    {
      id:2,
      text:'Meeting at School',
      day:'Feb 6th at 10:30 am',
      reminder: true,
    },
    {
      id:3,
      text:'Food Shoopping',
      day:'Feb 7th at 3:00 pm',
      reminder: true,
    },
    
  ])
  //ADD TASK
  const addTask = (task) =>{
    const id = Math.floor(Math.random()*10000) + 1
    const newTask = {id , ...task}
    setTasks([...tasks,newTask])
  }

  //DELETE TASK FUNCTION 
  const deleteTask = (id) => { 
    setTasks(tasks.filter((task)=>(
      task.id!==id
    )))
  }

    //TOGGLE REMINDER

   const toggleReminder = (id)=>{
      setTasks(
        tasks.map((task)=>
        task.id === id ? {...task,reminder:!task.reminder}:task
        )
      )
    }

  return (
    <div className="container">
        <Header showAdd ={showAddTask} onAdd = {()=> setShowAddTask(!showAddTask)}/>
        {showAddTask && <AddTask onAdd = {addTask}/>
}
        {/* <Paragraph text="I am very excited to be able to reuse the header component via the props feature so cool mehn"/>
    <Paragraph text="WohOOO.Haha"/> */}
    {tasks.length > 0 ? (
    <Tasks tasks ={tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>
    ):(
      'No Tasks to Show'
    )}
    </div>
  )
}

export default App;
