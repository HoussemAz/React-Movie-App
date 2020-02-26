import React, { Component } from 'react'

export default class search extends Component {


    render() {
        return (
            <div className="name-filter">
                <input className="name-filter-text"
                type='text'
                placeholder='Type movie name to search'
                onChange={e=>this.props.handelSearch(e.target.value)}
                value={this.props.input}/>
                <span className="iconsearch"><i class="fas fa-search"></i></span>
            </div>
        )
    }
}

