import React, { useEffect, useState } from 'react';
import CareateTask from './modals/CareateTask';
import Card from './Card';
import Swal from "sweetalert2";


const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("taskList");

        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj)
        }
    }, []);

    const deleteTask = (index) => {

        let tempList = taskList;
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList)
        window.location.reload();
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {


        let tasklistLocal = localStorage.getItem("taskList") || '';
        debugger
        if (tasklistLocal) {
            // task hai
            tasklistLocal = JSON.parse(tasklistLocal);

            const foundTask = tasklistLocal.find(task => task?.taskName?.toLowerCase() === taskObj?.taskName?.toLowerCase());

            if (foundTask) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Title ALready Exits !!',
                })
            } else {
                const allTasks = [...taskList, taskObj]
                localStorage.setItem("taskList", JSON.stringify(allTasks));
                setTaskList(allTasks);
                setModal(false);
            }
        } else {
            // nahi hai
            localStorage.setItem("taskList", JSON.stringify([taskObj]));
            setTaskList([taskObj]);
            setModal(false);
        }
    }

    const updateListArray = (obj, index) => {

        let getArr = localStorage.getItem("taskList") || '';
        
        getArr = getArr ? JSON.parse(getArr): getArr;
        
        if (getArr) {
            const isExist = getArr.findIndex(t => t.id === obj.id);
            debugger
            if (isExist && isExist !== -1) {  

                debugger               
                getArr[isExist].description = obj.description;
                localStorage.setItem("taskList", JSON.stringify(getArr));
                setTaskList(getArr);
            } else {

                debugger
                getArr[isExist] = obj;
                localStorage.setItem("taskList", JSON.stringify(getArr));
                setTaskList(getArr);
            }
        }
    }


    return (
        <>
            <div className='header text-center'>
                <h3>Todo List || Assigned by Amit Sir</h3>
                <button className='btn btn-success mt-2' onClick={() => setModal(true)}>Add Todo</button>
            </div>
            <div className='task-container'>
                {taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
            </div>
            <CareateTask toggle={toggle} modal={modal} save={saveTask} />
        </>
    )
}

export default TodoList 