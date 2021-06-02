import React from 'react';
import './appNav.css';

const AppNav = () => {
    return (
        <div className='navHeaderBlock'>
        <input className='navSearchInput form-control' type="text" placeholder='search' />
        <input className='navFilterInput btn-check' type="radio" name='filterToDo' value='all' id="option1" autoComplete= 'off'/>
            <label className="btn btn-secondary navFilterLabel activeFilter" htmlFor="option1">All</label>
        <input className='navFilterInput btn-check' type="radio" name='filterToDo' value='active'  autoComplete= 'off'/>
            <label className="btn btn-secondary navFilterLabel" htmlFor="option1">Active</label>
        <input className='navFilterInput btn-check' type="radio" name='filterToDo' value='done' autoComplete= 'off'/>
            <label className="btn btn-secondary navFilterLabel" htmlFor="option1">Done</label>
        </div>
    )
};

export default AppNav;
