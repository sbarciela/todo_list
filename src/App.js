import {useState, useEffect} from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import TasksList from "./components/TasksList";
import Filters from "./components/Filters";
import Footer from "./components/Footer";

function App() {

  let taskList=localStorage.getItem("tasks")

  if(taskList===null){
    localStorage.setItem("tasks",JSON.stringify([]));    
  }

  //pasamos el valor del localStorage al estado del componente
  let parseado=JSON.parse(taskList)
  

  const [tasks, setTasks] = useState(parseado);
  const [activeList, setActiveList]= useState([]);
  const [activeFilter, setActivefilter]=useState("All");
  const [filteredTodos, setFilteredTodos]=useState(parseado)
  


useEffect(() => {
   //al montarse el componente...
  //consultamos por objeto en local storage, si no existe seteamos clave con array vacio
  
  
}, []);


//de acuerdo a que filtro esta activo setea estado para mapeo de las tareas
useEffect(()=>{
if(activeFilter==="Completed"){
let completed=tasks.filter(task=>task.active===false)
setFilteredTodos(completed)
}else if(activeFilter==="Active"){
let actives=tasks.filter(task=>task.active===true)
setFilteredTodos(actives)
}else if(activeFilter==="All"){
  let All=tasks
setFilteredTodos(All)
} 
},[activeFilter,tasks,activeList])

 //metodo para creacion de una nueva tarea
 async function submit(e,taskField) {
  //evitamos someter form y creamos tarea, sera un objeto con id y valor del field
  e.preventDefault();

  let filteredName
  if(taskField.current.value===""){
    filteredName="undefined task"
  }else{
    filteredName=taskField.current.value
  } 

  let newTask = {
    id: crypto.randomUUID(),
    name: filteredName,
    active: true
  };
  //agregamos la tarea al estado
  let newList = [...tasks]; // tomamos en una variable todo lo que esta en el estado con spread operator
  newList.push(newTask); //pusheamos la nueva task
  localStorage.setItem("tasks", JSON.stringify(newList)); //actualizamos local storage
  taskField.current.value = ""; //reset del input
  await setTasks(newList); //seteamos nuevos estado
  await setActivefilter("All")
}



//metodo para eliminar tarea para pasar por props a componente hijo
//recibe como parametro el index del elemento que se eliminara de la lista
let deleteTask=(index)=>{
let list=[...tasks];
let newList=list.filter(item=>item.id!==index)
setTasks(newList)
localStorage.setItem("tasks",JSON.stringify(newList));//actualizamos local storage
}

//metodo para cambiar estado de activo o no ,que ejecuta el componente hijo
let updateStateTask=(index)=>{
let list=[...tasks];
let item=list.find(item=>item.id===index);
item.active=!item.active;
setActiveList(list)
localStorage.setItem("tasks",JSON.stringify(list));//actualizamos local storage
}


//metodos para filtrar tareas
function showCompletedTasks() {
 setActivefilter("Completed") 
}

function showActivesTasks() {
  setActivefilter("Active") 
 }

 function showAllTasks() {
  setActivefilter("All") 
 }

 function deleteAllHandler(){
let list=[...tasks];
let newList=list.filter(item=>item.active===true);
setTasks(newList)
localStorage.setItem("tasks",JSON.stringify(newList));//actualizamos local storage
 }
 
 
  
  return (
    <div className="container">
    <div className="wrapper">
      <Title />
        <Filters 
        showAllTasks={showAllTasks}
        showActivesTasks={showActivesTasks}
        showCompletedTasks={showCompletedTasks}
        activeFilter={activeFilter}
        />
      
      {activeFilter==="All"||activeFilter==="Active"? <Form submit={submit}/>:null}
     

      <TasksList
      filteredTodos={filteredTodos}
      deleteTask={deleteTask}
      updateStateTask={updateStateTask}
      activeFilter={activeFilter}
      deleteAllHandler={deleteAllHandler}
      /> 

    </div>
    <Footer/>
    </div>
  );
}

export default App;
