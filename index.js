//Here We are using it on the Server.

//Goal: Create an Express web server
//initialize NPM in a project by running NPM it from the project route
const path = require('path')//'path' is Core Node Module,So here no need to instal it down below we can simply use
const express = require('express')
const http = require('http')//'http' core module(one way of configuring Express)
const socketio = require('socket.io')

const app = express()
//creating express application we're goin to create a variable called 'server'
//#(WHEN EXPRESS CREATES THAT SERVER BEHIND THE SCENE , Ww dont have access to it to pass it in right here )
//#we are creating for explcit purpose of being able to pass it in right there.
//#Our server Supports web sockects
const server = http.createServer(app)//Creating New web server & passing express application
const io = socketio(server)//io expects it to be called with the raw HTTTP server

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')//for current directory '__dirname' joining with public file

app.use(express.static(publicDirectory))//here using the 'Express' static Midddleware to serve up

//Goal2: Allow clients to send messages


//Goal1: Send welcome msg to new users
io.on('connection', (socket) => {
    console.log('New WebSocket Connection')
    socket.emit('message', 'Welcome!')//event
})
server.listen(port, () => {
    console.log('Server is up on port ${ port }!')
} )

//!st Demo
//let count = 0

// io.on('connection', (socket) => {
//     console.log('New web SOckect connection')

//     socket.emit('countUpdated', count)//".emit" to send An Event on the Server, & providing name as customising
//                                      //server(index.js) emitting the event from the server to the client (client.js)
//                                     // Data='count' -> trasnfer data such as the value for account.,argu for the callback fun, Acces in the chat.js
//     socket.on('increment' ,() => {
//         count++
//         socket.emit('countUpadated', count)//this same as "io.emit" ,# it emit an event to Specific connection
//         io.emit('countUpdated', count)     //this emit the event to every Single connection 
//     })
// })//#Our server Supports web sockects,  client that connect to it & Using io i.e. io.on , listening for a given event to occure 
//'(socket)' contains info about new connection
//Working with socket.io, & when we transfering data we're Sending & Receiving what are called events 



/*Using "Socket.io" library ->It provides every things & also provides 
client-side code we can use in the browser to communicate with that server.
 Going to build real time application */
 /*Install library-> npm i socket.io@verion*/

 //
