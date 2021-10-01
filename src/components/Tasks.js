import Task from './Task.js'
const Tasks = ({tasks,onDelete,onToggle}) => {
    return (
        <>
        {tasks.map((task)=>(
            <Task key = {task.id} task = {task} onDelete = {onDelete} onToggle={onToggle}/>//Simply the power of reusing components...We create multiple task components with the power of the map method
        ))}
        </>
    )
}

export default Tasks
