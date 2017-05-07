/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

const Card  = ( {location, data, schools, cardClick, selected, id} ) => {
  let cssClass = schools.selectionMatch(location, selected)
  let cardAvg = schools.findAverage(location)
  let dataPairs = schools.makeCardArray(data)
  let hiddenOrNot = schools.selectionAverage(location, selected)
  return(
    <section className = {`card ${cssClass}`}
             onClick = {cardClick.bind(null, location)}>
      <h3 className="card-school-name">{location}</h3>
      {dataPairs.map((set, i) =>{
        return(
          <div
            className="card-info"
            key = {i}>
            <p className={schools.highLowValues(set)}>{set}</p>
          </div>
        )
      })}
      <div className={`card-avg ${hiddenOrNot}`}>Avg: {cardAvg}</div>
      <div className="chalk"></div>
    </section>
  )
}

Card.propTypes = {
  location: PropTypes.string,
  data: PropTypes.object,
  schools: PropTypes.object,
  cardClick: PropTypes.func,
  selected: PropTypes.array,
  id: PropTypes.string
}

export default Card
