/*this is the cook*/
const io = require('socket.io')(3000)

io.on('connection', (socket) => {
  console.log('new-user')
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', message)
    console.log('server', message)
  })
})


//be sure envoke the function~~

// broadcast sends it to everyone else but the sender