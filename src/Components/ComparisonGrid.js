/* eslint-disable */
import React from 'react'
import ComparisonCard from './ComparisonCard.js'
import Card from './Card.js'
import DistrictRepository from '../Helpers/helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import PropTypes from 'prop-types'


const ComparisonGrid = ({schools, cardClick, selected}) => {

  //can refactor
  
  if(selected.length === 1 || selected.length === 2){
    let first = schools.findAllMatches().find((school, i) =>{
        return schools.data[selected[0]] === school
    })
    let second = schools.findAllMatches().find((school, i) =>{
        return schools.data[selected[1]] === school
    })



    if (!second) {
      return (
        <div className = "compare-grid">
          <Card location = {first.location}
            data = {first.data}
            schools = {schools}
            cardClick = {cardClick}
            id = {first.location}
            selected = {selected}/>
        </div>
          )
    } else {
      let firstAvg = schools.findAverage(first.location)
      let secondAvg = schools.findAverage(second.location)
      let comparisonAverage = schools.compareDistrictAverages(first.location, second.location)
      return (
          <div className = "compare-grid">
          <Card location = {first.location}
            data = {first.data}
            schools = {schools}
            cardClick = {cardClick}
            id = {first.location}
            selected = {selected}/>
          <ComparisonCard
            locationA={first.location}
            locationB={second.location}
            avgA={firstAvg}
            avgB={secondAvg}
            comparisonAverage={comparisonAverage}
          />
          <Card location = {second.location}
            data = {second.data}
            schools = {schools}
            cardClick = {cardClick}
            id = {second.location}
            selected = {selected}/>
          </div>
        )
    }
  } else {
    return(
      <div></div>
    )
  }
}

ComparisonGrid.propTypes = {
  schools: PropTypes.object,
  cardClick: PropTypes.func,
  selected: PropTypes.array,
}

export default ComparisonGrid
