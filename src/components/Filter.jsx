import { useEffect } from "react";

function Filter({showActivesTasks,showAllTasks,showCompletedTasks,activeFilter,name}){

    useEffect(() => {
        
    
     
    }, [])
    

    let filterFuncion
    if(name==="Active"){
        filterFuncion=()=>{
            showActivesTasks()
        }
    }else if(name==="All"){
        filterFuncion=()=>{
            showAllTasks()
        }
    }else if(name==="Completed"){
        filterFuncion=()=>{
            showCompletedTasks()
        }
    };


  
  
    
    return(
        <div>
            <div  onClick={filterFuncion} className="filter" >{name}</div>
            {name===activeFilter?<div className="rectangle"></div>:null}
            
        </div>
        
    )
}

export default Filter