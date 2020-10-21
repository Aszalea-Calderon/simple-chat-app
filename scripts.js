/*this is waiter-> this is the middle man between the server and the brower*/
const socket = io('http://localhost:3000')

/*dom manipulation is used to manipluate the page*/
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-form')
const messageInput = document.getElementById('message-input')


//This takes in a name--
const name = prompt('What is your awesome name?')
appendMessage('Welcome! You have signed on!')//This is using the already created function to add a message to the screen
socket.emit('new-user', name)


//It takes the message (messageInput) from above, and adds things here #2
socket.on('chat-message', (data) => {
  appendMessage(`${data.name}:${data.message}`)//this is sending appendMessage
})

socket.on('user-connected', (name) => {
  appendMessage(`${name} connected`)
  // socket.broadcast.emit = ${name};
})

socket.on('user-disconnected', (name) => {
  appendMessage(`${name} disconnect`)
  // socket.broadcast.emit = ${name};
})

// socket.on('user-disconnected', (name) =>{
//   appendMessage(`Byee ${name}!`)
// })

messageForm.addEventListener('submit', (e) =>{
  e.preventDefault() //this removes the auto refresh when you send things*/
  const message = messageInput.value //this links to the input type, it saves it*/
  appendMessage(`you:${message}`)
  socket.emit('send-chat-message', message) //every emit takes two paramiters 
  messageInput.value = '' //this emptys out the content from what you just wrote
}) //e is the standard for event, its just a callback
 //every emit takes two paramiters


//Then it goes here #3 
function appendMessage(message){
  const messageElement = document.createElement('div')//This creates the new message going back
  messageElement.innerText = message//inside the div, we want to add the message
  messageContainer.append(messageElement)
}//IT WRITES THE MESSAGE ON THE SCREEN


// appendMessage(name);