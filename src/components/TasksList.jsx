import DeleteIcon from '@material-design-icons/svg/outlined/delete_outline.svg';
import Task from "./Task"

function TasksList ({deleteAllHandler,deleteTask, activeFilter,updateStateTask,filteredTodos}){
    
   return(
   <div>
     

    {filteredTodos.map((task,i)=>{return <Task 
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
         <DeleteIcon className="delete-icon-white" />
        delete all</button></div>:null}
   </div>
   )

}

export default TasksList