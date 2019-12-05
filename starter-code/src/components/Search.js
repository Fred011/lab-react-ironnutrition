import React, { Component } from 'react'

export default class Search extends Component {

    let {theSearch} = this.props
    render() {
        return (
            <div>

                <input 
                    type="text" 
                    value={this.props.searching}
                    onChange={this.props.theSearch}
                    placeholder="Search.." />

            </div>
        )
    }
}

