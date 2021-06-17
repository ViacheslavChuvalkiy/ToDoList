import React,{Component} from 'react';

import AppHeader from "../AppHeader/appHeader";
import AppNav from "../AppNav/appNav";
import ToDoList from "../ToDoList/ToDoList";

import './app.css';

export default class App extends Component{

    maxId = 100;

    state = {
        toDoDate : [
            this.createTodoItem("Drink tea"),
            this.createTodoItem("Drink coffee"),
            this.createTodoItem("Drink cola")
        ]
    };

    onClickDelete = (id) => {

        let toDoDate = this.state.toDoDate;

        let indexElement = toDoDate.findIndex((el) => el.id === id);

        toDoDate.splice(indexElement,1);

        this.setState({
            toDoDate
        });

    };

    onClickAdd = () => {

        let inputAddTodo = document.getElementById('nameAddTodoItem');
        let todoName = inputAddTodo.value;

        if(!todoName){
            return;
        };

        inputAddTodo.value ='';

        let toDoDate = this.state.toDoDate;

        let newItem = this.createTodoItem(todoName);

        toDoDate.push(newItem);

        this.setState({
            toDoDate
        });

    };

    onClickImportant = (id) => {

        let toDoDate = this.state.toDoDate;

        let indexElement = toDoDate.findIndex((el) => el.id === id);

        let elArray = toDoDate[indexElement];

        elArray.important = !elArray.important;

        this.setState({
            toDoDate
        });

    };

    onClickDone= (id) => {

        let toDoDate = this.state.toDoDate;

        let indexElement = toDoDate.findIndex((el) => el.id === id);

        let elArray = toDoDate[indexElement];

        elArray.done = !elArray.done;

        this.setState({
            toDoDate
        });

    };

    createTodoItem(text) {

        return {
            label : text, important : false, done : false, id: this.maxId++
        }

    };

    render() {

        const {toDoDate}  = this.state;

        return (
            <div className='container todo-container'>
                <AppHeader toDoDate={toDoDate}/>
                <AppNav/>
                <ToDoList
                    todos={toDoDate}
                    onClickDelete={this.onClickDelete}
                    onClickAdd = {this.onClickAdd}
                    onClickImportant = {this.onClickImportant}
                    onClickDone = {this.onClickDone}
                />
            </div>
        );
    }
};
