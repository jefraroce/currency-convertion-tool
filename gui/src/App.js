import React, { useState, useEffect } from 'react'
import './App.css'
import io from 'socket.io-client'
import Chat from './components/Chat'
import MuiTheme from './layouts/MuiTheme'
import ConvertionList from './components/ConvertionList'

const socket = io(process.env.SERVER || 'localhost:3001')

const App = () => {
  const [convertions, setConvertions] = useState([])

  const addConvertion = (newConvertion) => {
    setConvertions([...convertions, newConvertion])
  }

  useEffect(() => {
    socket.on('response', data => {
      addConvertion(data)
    })
    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('message')
    }
  })

  const convert = (amount) => {
    socket.emit('new-convertion', amount)
  }

  return (
    <MuiTheme>
      <Chat convert={convert} />

      <ConvertionList convertions={convertions} />
    </MuiTheme>
  )
}

export default App
