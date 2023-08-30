import DeleteIcon from "./assets/delete_outline.svg"
import Checkbox from "./assets/check_box_outline_blank.svg"
import CheckboxFilled from "./assets/check_box.svg";


function Task (props){


//este handler ejecuta el metodo paasado por props para eliminar el item con id correspondiente
function deleteTask(e){
    e.preventDefault()
    props.deleteTask(props.index)
}

function toggleTasks(){
props.updateStateTask(props.index)
}




//clase dinamica dependiendo estado
let inputClass
props.active?inputClass="":inputClass="task-done";


    return(
        <div >
           <form action="get" onSubmit={deleteTask} className="task">
            {props.active?
             <Checkbox className="checkbox" onClick={toggleTasks} />
             :
             <CheckboxFilled className="checked" onClick={toggleTasks} />
            }
                      
           <span onClick={toggleTasks} className={inputClass} >{props.name}</span>
            {props.activeFilter==="Completed"?<DeleteIcon className="delete-icon" onClick={deleteTask}/>:null}
           </form>
        </div>
    )
};

Task.defaultProps= {
    name: "undefined task"}

export default Task