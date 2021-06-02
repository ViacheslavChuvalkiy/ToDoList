import React from 'react'
import './appHeader.css';

const AppHeader = () => {
    return (
        <div className='appHeader-block'>
            <h1>My ToDo list</h1>
            <span className='span-header'> 1 more to do , 3 done   </span>
        </div>

    );
};


export default AppHeader;