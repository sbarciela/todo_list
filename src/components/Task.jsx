import DeleteIcon from '@material-design-icons/svg/outlined/delete_outline.svg';
import Checkbox from '@material-design-icons/svg/round/check_box_outline_blank.svg';
import CheckboxFilled from '@material-design-icons/svg/round/check_box.svg';

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