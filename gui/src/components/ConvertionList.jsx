import React from 'react'
import Typography from '@material-ui/core/Typography'

const ConvertionList = ({ convertions }) => {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Mis Conversiones
      </Typography>
      <ol>
        {convertions.map((convertion, i) => (
          <li key={i}>$ { convertion.query.amount } COP <span>equivalen a</span> <strong>$ { convertion.result } USD</strong></li>
        ))}
      </ol>
    </>
  )
}

export default ConvertionList
