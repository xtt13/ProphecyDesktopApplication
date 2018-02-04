// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

console.log('HELLO WORLD');
console.log(this);

const ipc = require('electron').ipcRenderer

// const asyncMsgBtn = document.getElementById('async-msg')

// asyncMsgBtn.addEventListener('click', function () {
//   ipc.send('asynchronous-message', 'ping')
// })

ipc.send('asynchronous-message', 'ping')
console.log('HELLO WORLD 2');
console.log(ipc);
console.log(this);

global.ipc = ipc;  

// ipc.on('asynchronous-reply', function (event, arg) {
//   const message = `Asynchronous message reply: ${arg}`
//   document.getElementById('async-reply').innerHTML = message
// })
