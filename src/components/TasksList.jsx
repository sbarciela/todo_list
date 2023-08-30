import deleteIcon from "./assets/delete_outline_white.svg?url"
import Task from "./Task"

function TasksList ({deleteAllHandler,deleteTask, activeFilter,updateStateTask,filteredTodos}){
    
   return(
   <div>
     

    {filteredTodos&&filteredTodos.map((task,i)=>{return <Task 
        key={i} 
        index={task.id} 
        name={task.name} 
        active={task.active} 
        deleteTask={deleteTask} 
        updateStateTask={updateStateTask}
        activeFilter={activeFilter}
        />})}
  
        {activeFilter==="Completed"&&filteredTodos.length>0?
        <div>
        <button className="deleteAll" onClick={deleteAllHandler}>
         <img src={deleteIcon} className="delete-icon-white" alt='delete-icon' />
        delete all</button></div>:null}
   </div>
   )

}

export default TasksList