import React from 'react';
import './ToDoItem.css';


const CreateToDoItem = ({label} )=>{

    return (<span className='todo-list-item'> {label}</span>)
};

export default CreateToDoItem;