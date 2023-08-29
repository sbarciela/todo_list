import Filter from "./Filter"

function Filters({showActivesTasks,showAllTasks,showCompletedTasks,activeFilter}){

    let filterList=["All","Active","Completed"]
    return(
        <div>
        <div className="filter-container">
            {filterList.map((item,i)=>
            <Filter key={i} name={item}
            showAllTasks={showAllTasks}
            showActivesTasks={showActivesTasks}
            showCompletedTasks={showCompletedTasks}
            activeFilter={activeFilter}
            />)}
        
        </div>
        <hr className="line"></hr>
        </div>
    )
}

export default Filters