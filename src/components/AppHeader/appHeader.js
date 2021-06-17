import React, {Component} from 'react'
import './appHeader.css';

export default class AppHeader extends Component{

    render()
    {
        const {toDoDate} = this.props;
        const doneCount = toDoDate.filter((el) => el.done).length;
        const todoCount = toDoDate.length - doneCount;

        return (
            <div className='appHeader-block'>
                <h1>My ToDo list</h1>
                <span className='span-header'> {todoCount} more to do , {doneCount} done</span>
            </div>

        );
    };
};


