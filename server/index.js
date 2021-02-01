const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    methods: ['OPTIONS', 'GET', 'POST'],
    credentials: true
  }
})
require('./db')
const { convert } = require('./services/currencyLayer')
const Convertion = require('./models/convertion')

app.get('/', (req, res) => {
  res.send("Please, don't hack me")
})

io.on('connection', socket => {
  console.log(`connect: ${socket.id}`)

  socket.on('new-convertion', (amount) => {
    console.log(`amount ${socket.id}`, amount)
    convert(amount)
      .then((response) => {
        console.log('response ', response)

        const result = {
          success: response.success,
          query: response.query,
          result: response.result
        }

        socket.emit('response', result)
        const newConvertion = new Convertion(result)
        newConvertion.save((error, convertionSaved) => {
          if (error) {
            console.error('Error saving convertion query ', error)
          } else {
            console.log(convertionSaved)
          }
        })
      })
      .catch((error) => {
        console.error('Error', error)
      })
  })

  socket.on('disconnect', () => {
    console.log(`disconnect: ${socket.id}`)
  })
})

http.listen(3001, () => {
  console.log('listening on *:3001')
})
