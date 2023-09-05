import { useRef } from "react";

function Form (props){
    let taskField=useRef();

    function submit(e){
        props.submit(e,taskField)
    }
    
    return(
        <div>
        <form onSubmit={submit} className="input-form">
        <input type="text" placeholder="add details" ref={taskField} name="form-inmput-field" />
        <button>Add</button>
      </form>
        </div>
    )
};

export default Form