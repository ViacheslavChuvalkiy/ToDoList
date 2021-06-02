import React from 'react';
import CreateToDoItem from "../ToDoItem/ToDoItem";
import './ToDoList.css'

const ToDoList = ({todos}) => {

    const listItems = todos.map((item) => {

        const {id,...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <CreateToDoItem { ...itemProps}
                />
            </li>
        );
    });

    return (
        <div className= 'todo-list-block'>
            <ul className='list-group todo-list'>
                {listItems}
            </ul>
        </div>
    );
};
export default ToDoList;