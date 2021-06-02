import React from 'react';
import './ToDoItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const CreateToDoItem = ({label} )=>{

    return (
        <div className='todo-list-item-block'>
            <span className='todo-list-item'> {label}</span>
            <div className='todo-list-item-icons'>
                <FontAwesomeIcon icon={['fas', 'trash-alt']}  className='toDoitemIcons'/>
                <FontAwesomeIcon icon={['fas', 'minus-square']} className='toDoitemIcons'/>
            </div>
        </div>

    )
};

export default CreateToDoItem;