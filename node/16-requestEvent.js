const EventListener = require('events');
const { EventEmitter } = require('stream');

const customEmitter = new EventEmitter();
customEmitter.on('response',(name,id) => {
  console.log(`data recieved ${name} ${id}`);
  console.log(`another logic ${name} ${id}`);
})


customEmitter.emit('response','john',34);