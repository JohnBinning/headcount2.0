import React from 'react'


const ComparisonCard = ({locationA, locationB, avgA, avgB, comparisonAverage}) => {
  return(
    <div className = "comparison-card">
      <h3 className = "location-a" >{locationA} <span className = "value">{avgA}</span></h3>
      <h2 className = "comparedData" >{comparisonAverage.compared}</h2>
      <h3 className = "location-b" >{locationB} <span className = "value">{avgB}</span></h3>
    </div>
  )
}

export default ComparisonCard
