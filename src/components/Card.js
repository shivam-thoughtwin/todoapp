import React, { useState } from 'react';
import EditTask from './modals/EditTask';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {

    const [modal, setModal] = useState(false);

    const handleDelete = ()=>{
        
        deleteTask(index);
    }

    const toggle = () =>{
        setModal(!modal);
    }

    const updateTask = (obj) =>{
        updateListArray(obj, index)
    }

    return (
        <div className='card-wrapper mr-5'>
            <div className='card-top' style={{ backgroundColor: '#F2FAF1', borderRadius:'10px' }}>
                <div className='task-holder'>
                    <span>{taskObj.Name}</span>
                    <p>{taskObj.Description.substring(0, 65)}</p>
                    <div style={{position:'absolute', right:'20px', bottom:'20x'}}>
                        <p style={{cursor:'pointer'}} onClick={()=> setModal(true)}>Edit</p>
                        <p style={{cursor:'pointer'}} onClick={handleDelete}>Delete</p>
                    </div>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    )
}

export default Card