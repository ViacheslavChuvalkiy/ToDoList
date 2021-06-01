import React from 'react';
import ReactDom from 'react-dom';
import ToDoList from "./components/ToDoList/ToDoList";
import classes from './style/main.css';

const AppHeader = () => {
    return <h1>My ToDo list</h1>;
};

const AppNav = () => {
    return <input type="text" placeholder='search' />
};


const App = () => {

    const toDoDate = [
        {label : 'Drink tea',    important : false, id:1},
        {label : 'Drink coffee', important : true,  id:2},
        {label : 'Drink cola',   important : false, id:3}
        ];

    return (
        <div className={classes.container}>
            <AppHeader />
            <AppNav />
            <ToDoList todos = {toDoDate} />
        </div>
    );
};

ReactDom.render(<App/>,document.getElementById('root'));