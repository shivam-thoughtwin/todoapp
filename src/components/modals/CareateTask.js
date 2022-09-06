import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


const CareateTask = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescrition] = useState('');
 
    const handleChange = (e) =>{
            const {name, value} = e.target

            if(name === 'taskName'){
                setTaskName(value);
            }else{
                setDescrition(value);
            }
    }

    const handleSave = () =>{
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj)
        
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add Task</ModalHeader>
            <ModalBody>
                <form>

                    <div class="form-group">
                        <label>Task Title</label>
                        <input type="text" class="form-control" value={taskName} onChange={handleChange} name="taskName" placeholder="Enter Task Title" />
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Description</label>
                        <textarea class="form-control" value={description} onChange={handleChange} name="description" placeholder='Enter Description.....' rows="5"></textarea>
                    </div>

                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>
                    Add Task
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default CareateTask