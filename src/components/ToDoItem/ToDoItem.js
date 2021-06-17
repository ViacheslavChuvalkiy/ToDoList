import React, {Component}  from 'react';
import './ToDoItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default class TodoItem extends Component{

    render()
    {
        const {label,onClickDelete,onClickImportant,onClickDone,done,important} = this.props;

        let classNames = 'todo-list-item';

        if(done){
            classNames += ' todo-list-item-done';
        }
        if(important){
            classNames += ' todo-list-item-important';
        }

        return (
            <div className='todo-list-item-block'>
                <span
                    className = {classNames}
                    onClick={onClickDone}>
                    {label}
                </span>
                <div className='todo-list-item-icons'>
                    <FontAwesomeIcon
                        icon={['fas', 'trash-alt']}
                        className='toDoitemIcons'
                        onClick = {onClickDelete}
                    />

                    <FontAwesomeIcon
                        icon={['fas', 'exclamation-circle']}
                        className='toDoitemIcons'
                        onClick = {onClickImportant}
                    />
                </div>
            </div>
        )
    }
};
