// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance

const eventEmitter = require('events');

const customemitter = new eventEmitter;

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

customemitter.on('response',(name,id)=>{
  console.log(`data recieved user: ${name} with id: ${id}`)
})
customemitter.on('response',()=>{
    console.log(`hii there it is`)
})
customemitter.emit('response','john',34)