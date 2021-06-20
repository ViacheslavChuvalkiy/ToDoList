import React, {Component} from 'react';
import CreateToDoItem from "../ToDoItem/ToDoItem";
import './ToDoList.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class ToDoList extends Component{

    state = {
        label:''
    };

    onChangeLabel = (e) => {
        this.setState({label:e.target.value});
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        let text = this.state.label;

        if(!text){
            return;
        }

        this.props.onClickAdd(text);

        this.setState({label: ''})
    };

    render() {

        const {todos, onClickDelete,onClickImportant,onClickDone} = this.props;

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
                <form
                    className='item-add-form d-flex'
                    onSubmit={this.onFormSubmit}>
                    <input type="text"
                           className="form-control"
                           placeholder="add todo"
                           onChange={this.onChangeLabel}
                           value={this.state.label}
                    />
                    <button
                        className="btn btn-outline-secondary">
                        <FontAwesomeIcon
                            icon={['fas', 'plus-square']}/>
                    </button>
                </form>
            </div>
        );
    };
};
