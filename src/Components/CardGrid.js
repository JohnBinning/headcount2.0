/* eslint-disable */
import React from 'react'
import Card from './Card.js'
import DistrictRepository from '../Helpers/helper'
import kinderData from '../../data/kindergartners_in_full_day_program.js';
import PropTypes from 'prop-types'

const CardGrid = ({ schools, searched, cardClick, selected }) => {
  return(
    <section className="card-grid">
      {schools.findAllMatches(searched).map((school, i) =>{
        // console.log(school.data);
        return(
          <div key = {i} >
             <Card location = {school.location}
                   data = {school.data}
                   schools = {schools}
                   cardClick = {cardClick}
                   id = {i.toString()}
                   selected = {selected}/>
          </div>
        )
      })}
    </section>
  )
}

CardGrid.propTypes = {
  schools: PropTypes.object,
  cardClick: PropTypes.func,
  selected: PropTypes.array,
  searched: PropTypes.string
}

export default CardGrid
