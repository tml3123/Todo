

import React,{Fragment, useState} from 'react'

const Todolist = () => {

    let [data,setData]=useState("")// to store the single task

    let [task,setTask]=useState([])// to store multiple task together


    let handleChange=(e)=>{
        setData(e.target.value)
    }

    let handleSubmit=(e)=>{

        e.preventDefault()

        if(data==""){
            alert("Please enter some task")
        }
        else{

            setTask([...task,data])
            setData("")
        }
    }

    console.log([data]);//![task1 ,task2, task3]
    

    let handleDelete =(x)=>{
     

        let updatedarr = task.filter((value,index)=>x!=index)

        console.log
        ("updatedarr",updatedarr); //[]

        setTask(updatedarr)

    }



  return (

    <>
    <h2>ToDolist</h2>

    <form action="" onSubmit={handleSubmit}>
          <input type="text" placeholder='Add task' value={data} onChange={handleChange}/>
          <button>Render</button>
    </form>
    {
        task.map((value,index)=>{
            return(
                <Fragment key={index}>
                    <h2>{value}</h2>
                    <button onClick={()=>handleDelete(index)}>Delete</button>
                </Fragment>
            )
        })
    }
    </>
  )
}

export default Todolist