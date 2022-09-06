import React, { useEffect, useState } from 'react';
import CareateTask from './modals/CareateTask';
import Card from './Card';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(()=>{
        let arr = localStorage.getItem("taskList");
        
        if(arr){
            let obj = JSON.parse(arr);
            setTaskList(obj)
        }
    }, [])

    const deleteTask = (index) =>{
        let tempList = taskList;
        tempList.splice(index,1)
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList)
        window.location.reload();
    }

    const toggle = ()=>{
        setModal(!modal);
    }

    const saveTask = (taskObj) =>{
        let tempList = taskList
        tempList.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList);
        setModal(false)
    }

    const updateListArray = (obj, index) =>{
        let tempList  = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload();
    }

    return (
        <>
            <div className='header text-center'>
                <h3>Todo List || Assigned by Amit Sir</h3>
                <button className='btn btn-success mt-2' onClick={()=> setModal(true)}>Add Todo</button>
            </div>
            <div className='task-container'>
                { taskList.map((obj, index) => <Card taskObj ={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}  />) }
            </div>
            <CareateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    )
}

export default TodoList 