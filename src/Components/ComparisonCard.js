/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'


const ComparisonCard = ({locationA, locationB, avgA, avgB, comparisonAverage}) => {
  return(
    <div>
      <h3>{locationA} {avgA}</h3>
      <h2>{comparisonAverage.compared}</h2>
      <h3>{locationB} {avgB}</h3>
    </div>
  )
}

ComparisonCard.propTypes = {
  locationA: PropTypes.string,
  locationB: PropTypes.string,
  avgA: PropTypes.number,
  avgB: PropTypes.number,
  comparisonAverage: PropTypes.object
}

export default ComparisonCard
