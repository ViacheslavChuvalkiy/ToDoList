import React, {Component} from 'react';
import './appNav.css';

export default class AppNav extends Component{

    state = {
        term: '',
        filter : ''
    };

    buttons = [
        {name: 'all', label: 'all'},
        {name: 'active', label: 'active'},
        {name: 'done', label: 'done'}

    ];

    onChangeSeacrhInput = (e) => {

        const term = e.target.value;

        this.setState({term});

        this.props.onSearchChange({term});

    };


    render() {

        const {filter,onFilterChange} = this.props;

        const buttons = this.buttons.map(({name,label}) =>{

            const isActive = filter === name;

            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

            return (
                <button type="button"
                        className = {`btn ${clazz}`}
                        key={name}
                        onClick={ () => onFilterChange(name) }
                >
                    {label}
                </button>
            )

            });

        return (
            <div className='navHeaderBlock'>
                <input className='navSearchInput form-control'
                       type="text"
                       placeholder='search'
                       onChange={this.onChangeSeacrhInput}
                       value={this.state.term}
                />
                {buttons}
            </div>
        )
    }
};

