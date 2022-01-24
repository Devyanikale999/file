// creating (chat.js) our own client-side Js file load that in & use what's provided by this script here.-->

const socket = io()/*returning value(const socket) from the io()function,
                     Stored in a (const)variable becoz w're going to access it in this file 
                     ('Socket' is in the index.js file)*/
//Goal3

//Goal2
document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault()//to prevent that defualt behaviour where the browser goes throught
                      //code for->by cliking button after typing msg
const message = document.querySelector('input').value//Storing msg in variable querySelector
                                                     //targetting that msg by 
                                                     //grabing value for the input
    
})
//Goal1
socket.on('message', (message) => {//to listen for message
    console.log('message')//print to the terminal,here ,message is variable
    })


// socket.on('countUpdated', (count) => {
//     console.log('The count has been updated')/*Rendering a msg (from this Our server sending info to the client ),
//                                               This msg show (web browser) single time when we First connect*/ 

// })/*name of the Event we call to this 'countUpdated' & a ()fun to run when that event occurs
//     name here matches exactly with the name you picked over here inside of fun in chat.js */

//     //Allowing client to cliking on button to increment that count.
// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('Clicked')
//     //emit an event from Client & have that event listen to for on the Server
//     socket.emit('increment')//when clicks button 
// })//event Name is 'click',Event(clicking button) for this cliked event the ()function that prints a msg
 

