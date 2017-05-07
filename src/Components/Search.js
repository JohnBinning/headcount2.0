/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Search extends Component {
  constructor(){
    super()
    this.state ={
      search : '',
    }
  }

  render(){
    return(
      <div className = "search">
        <input type = "text"
              placeholder="Filter"
              value = {this.state.search}
              onChange = {(e) =>{
                this.setState({search: e.target.value})
                this.props.handleSearch(this.state.search)
              }}/>
      </div>
    )
  }
}

Search.propTypes = {
  handleSearch: PropTypes.func,
}
