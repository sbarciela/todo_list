import DeleteIcon from "./assets/delete_outline.svg"
import Checkbox from "./assets/check_box_outline_blank.svg"
import CheckboxFilled from "./assets/check_box.svg";
import check from "./assets/check_box_outline_blank.svg?url"
import checkboxFilled from "./assets/check_box.svg?url";
import deleteIcon from "./assets/delete_outline.svg?url"



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
             <img src={check} className="checkbox" onClick={toggleTasks} alt="checkbox"/>
             :
             <img src={checkboxFilled} className="checked" onClick={toggleTasks} alt="checkboxfilled" />
            }
                      
           <span onClick={toggleTasks} className={inputClass} >{props.name}</span>
            {props.activeFilter==="Completed"?<img src={deleteIcon} className="delete-icon" onClick={deleteTask} alt="delete"/>:null}
           </form>
        </div>
    )
};

Task.defaultProps= {
    name: "undefined task"}

export default Task