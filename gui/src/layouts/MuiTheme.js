import React from 'react'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const MuiTheme = (props) => {
  return (
    <ThemeProvider theme={createMuiTheme({})}>
      <Container maxWidth="sm">
        {props.children}
      </Container>
    </ThemeProvider>
  )
}

export default MuiTheme
