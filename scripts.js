/*this is waiter-> this is the middle man between the server and the brower*/
const socket = io('http://localhost:3000')

/*dom manipulation is used to manipluate the page*/
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-form')
const messageInput = document.getElementById('message-input')

socket.on('chat-message', (data) => {
  appendMessage(data)//this is sending appendMessage
})

messageForm.addEventListener('submit', e =>{
  e.preventDefault()/*this removes the auto refresh when you send things*/
  const message = messageInput.value /*this links to the input type, it saves it*/
  socket.emit('send-chat-message', message)/*every emit takes two paramiters*/
  console.log()
  messageInput.value = ''/*this emptys out the content from what you just wrote*/
})/*e is the standard for event, its just a callback*/
/*every emit takes two paramiters*/

function appendMessage(message){
  const messageElement = document.createElement('div')//This creates the new message going back
  messageElement.innerText = message//inside the div, we want to add the message
  messageContainer.append(messageElement)
}
//conatiner is big div
//prepend puts it in the front
//append puts it at the end