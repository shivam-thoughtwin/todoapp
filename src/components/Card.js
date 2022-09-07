import React, { useState } from 'react';
import EditTask from './modals/EditTask';
import Swal from "sweetalert2";

const Card = ({taskObj, index, deleteTask, updateListArray}) => {

    const [modal, setModal] = useState(false);

    const handleDelete = ()=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            
            if (result.isConfirmed) {
                deleteTask(index);
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })

        // if(window.confirm('Delete the item?')){
        //     deleteTask(index);
        // }
        
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