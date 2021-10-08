import {useState,useEffect} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

// import Paragraph from './components/Paragraph'
//ACTIONS GET PASSED UP WHILE STATES GETS PASSED DOWN.
import './index.css'
function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks] = useState([ ])

  useEffect(() => {
    const getTasks = async () => {

      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }

    getTasks()

  },[])
// FETCH TASKS

const fetchTasks = async () =>{
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json();
      return data;
    }
//FETCH TASK
    const fetchTask = async (id) =>{
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json();
      return data;
    }

  //ADD TASK
  const addTask = async (task) => {
  const res = await fetch ('http://localhost:5000/tasks',{
    method:'POST',
    //Headers added since we are sending data.
    headers: {
      'Content-type':'application/json',
    },
    body: JSON.stringify(task)
  }) 

  const data = await res.json()

  setTasks([...tasks,data])

  //   const id = Math.floor(Math.random()*10000) + 1
  //   const newTask = {id , ...task}
  //   setTasks([...tasks,newTask])

}

  //DELETE TASK FUNCTION 
  const deleteTask = async(id) => { 
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE',
    })

    setTasks(tasks.filter((task)=> task.id!==id
    ))
  }

    //TOGGLE REMINDER

   const toggleReminder = async (id)=>{

    const taskToToggle  = await fetchTask(id)
    const updTask = {...taskToToggle, reminder:!taskToToggle.reminder}
     
    const res = await fetch ('http://localhost:5000/tasks',{
    method:'PUT',
    //Headers added since we are sending data.
    headers: {
      'Content-type':'application/json',
    },
    body: JSON.stringify(updTask)
  }) 

  const data = await res.json()
      setTasks(
        tasks.map((task)=>
        task.id === id ? {...task,reminder:!data.reminder}:task
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
