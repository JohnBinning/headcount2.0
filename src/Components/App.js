/* eslint-disable */
import React, { Component } from 'react'
import '../Styles/normalize.css'
import '../Styles/App.css'
import Search from './Search.js'
import CardGrid from './CardGrid.js'
import ComparisonGrid from './ComparisonGrid.js'
import DistrictRepository from '../Helpers/helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js'

class App extends Component {
  constructor(){
    super()
    this.schools=new DistrictRepository(kinderData)
    this.state={
      searched : '',
      selected: []
    }
  }

  handleSearch(query){
    this.state.searched = query
    this.setState({searched : this.state.searched})
  }

  handleCardSelect(location){
    if(this.state.selected.length < 2){
      if(this.state.selected[0] === location){
        this.handleCardDeselect(location)
        return
      }
      this.state.selected.push(location)
    } else {
      this.handleCardDeselect(location)
    }
    this.setState({selected: this.state.selected})
  }

  handleCardDeselect(location){
    let index = this.state.selected.indexOf(location)
    if(!this.state.selected.includes(location)){
      return
    }
    if(this.state.selected.length === 1){
      this.setState({selected: []})
    }
    this.state.selected.splice(index, 1)

    this.setState({selected: this.state.selected})
  }

  render() {
    return (
      <div>
        <Search handleSearch = {this.handleSearch.bind(this)}/>
        <ComparisonGrid
                  schools = {this.schools}
                  cardClick = {this.handleCardSelect.bind(this)}
                  selected = {this.state.selected}/>
        <CardGrid schools = {this.schools}
                  searched = {this.state.searched}
                  cardClick = {this.handleCardSelect.bind(this)}
                  selected = {this.state.selected}/>

      </div>
    )
  }
}



export default App
