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
        ],
        term: '',
        filter: 'all' //active, all, done
    };

    onClickDelete = (id) => {

        let toDoDate = this.state.toDoDate;

        let indexElement = toDoDate.findIndex((el) => el.id === id);

        toDoDate.splice(indexElement,1);

        this.setState({
            toDoDate
        });

    };

    onClickAdd = (text) => {

        let toDoDate = this.state.toDoDate;

        let newItem = this.createTodoItem(text);

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

    search(items, term){

        if(term.length === 0){
            return items;
        }

         return items.filter((item) => {
             return item.label
                    .toLowerCase()
                    .indexOf(term.term.toLowerCase()) > -1
             });
        };


    onFilter(items, filter){

        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }

    };


    onSearchChange = (term) => {

        this.setState({
           term
        });

    };

    onFilterChange = (filter) => {

        this.setState({
            filter
        });

    };

    render() {

        const {toDoDate,term,filter}  = this.state;

        const visiableItems = this.onFilter(
            this.search(toDoDate,term),
            filter);

        return (
            <div className='container todo-container'>
                <AppHeader toDoDate={visiableItems}/>
                <AppNav
                    filter = {filter}
                    onSearchChange = {this.onSearchChange}
                    onFilterChange = {this.onFilterChange}
                />
                <ToDoList
                    todos={visiableItems}
                    onClickDelete={this.onClickDelete}
                    onClickAdd = {this.onClickAdd}
                    onClickImportant = {this.onClickImportant}
                    onClickDone = {this.onClickDone}
                />
            </div>
        );
    }
};
