import React, {Component}  from 'react';
import './ToDoItem.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default class extends Component{

    state = {
        done: false,
        important: false
    };

    onClickLabel = () => {

        let done = !this.state.done;

        this.setState({
            done
        });

    };

    onClickImportant = () => {

        let important = !this.state.important;

        this.setState({
            important
        });

    };

    onClickDelete = () => {

    };

    render()
    {
        const {label} = this.props;
        const {done,important}  = this.state;

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
                    onClick={this.onClickLabel}>
                    {label}
                </span>
                <div className='todo-list-item-icons'>
                    <FontAwesomeIcon
                        icon={['fas', 'trash-alt']}
                        className='toDoitemIcons'
                        onClick = {this.onClickDelete}
                    />

                    <FontAwesomeIcon
                        icon={['fas', 'exclamation-circle']}
                        className='toDoitemIcons'
                        onClick = {this.onClickImportant}
                    />
                </div>
            </div>
        )
    }
};
