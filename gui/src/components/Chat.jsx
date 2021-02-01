import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginBottom: '10px'
  },
  form: {
    display: 'flex',
  }
}))

const Chat = (props) => {
  const classes = useStyles()
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.convert(amount)
    setAmount('')
  }

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Conversiones
      </Typography>

      <form onSubmit={handleSubmit}  className={classes.form}>
        <TextField id="outlined-basic" label="Monto en Pesos" variant="outlined" value={amount} onChange={(e) => setAmount(e.target.value)} required={true} type="number" min={0} inputProps={{ min: 0 }} />

        <Button variant="contained" color="primary" type="submit">
          Convertir a USD
        </Button>
      </form>
    </div>
  )
}

export default Chat
