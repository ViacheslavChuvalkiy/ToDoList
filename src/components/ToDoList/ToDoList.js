import React from 'react';
import CreateToDoItem from "../ToDoItem/ToDoItem";
import './ToDoList.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ToDoList = ({todos, onClickDelete,onClickAdd,onClickImportant,onClickDone}) => {

    const listItems = todos.map((item) => {

        const {id,...itemProps} = item;
        return (
            <li key={id} className='list-group-item'>
                <CreateToDoItem
                    { ...itemProps}
                    onClickDelete = { () => onClickDelete(id)}
                    onClickImportant = { () => onClickImportant(id)}
                    onClickDone = { () => onClickDone(id)}
                />
            </li>
        );
    });

    return (
        <div className= 'todo-list-block'>
            <ul className='list-group todo-list'>
                {listItems}
            </ul>

            <div className="input-group mb-3 todo-list-form">
                <input type="text"
                       className="form-control"
                       id='nameAddTodoItem'
                       placeholder="add todo"
                       aria-label="add todo"

                />
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick = { () => onClickAdd()}>
                        <FontAwesomeIcon
                            icon={['fas', 'plus-square']}
                        />
                    </button>

            </div>

        </div>
    );
};

export default ToDoList;