import React from 'react';

import AppHeader from "../AppHeader/appHeader";
import AppNav from "../AppNav/appNav";
import ToDoList from "../ToDoList/ToDoList";

import './app.css';

const App = () => {

    const toDoDate = [
        {label : 'Drink tea',    important : false, id:1},
        {label : 'Drink coffee', important : true,  id:2},
        {label : 'Drink cola',   important : false, id:3}
    ];

    return (
        <div className='container todo-container'>
            <AppHeader />
            <AppNav />
            <ToDoList todos = {toDoDate} />
        </div>
    );
};

export default App;