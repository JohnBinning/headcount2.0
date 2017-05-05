import React from 'react'


const ComparisonCard = ({locationA, locationB, avgA, avgB, comparisonAverage}) => {
  return(
    <div>
      <h3>{locationA} {avgA}</h3>
      <h2>{comparisonAverage.compared}</h2>
      <h3>{locationB} {avgB}</h3>
    </div>
  )
}

export default ComparisonCard
