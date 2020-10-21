/*this is the cook*/
const io = require('socket.io')(3000)

//you need to create an object 

const users={}
//This is where the path starts - #1
io.on('connection', (socket) => {
  socket.on('new-user', name => {
   users[socket.id] = name
    socket.broadcast.emit('user-connected', name)
    // console.log('name-server', name)
  })
  socket.on('send-chat-message', (message) => {
    socket.broadcast.emit('chat-message', {
        message:message,
        name:users[socket.id],
    })
    
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
  })
})


//be sure envoke the function~~

// broadcast sends it to everyone else but the sender

//The goal is to get it to print on the screen