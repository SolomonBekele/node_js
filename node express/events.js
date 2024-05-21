const event = require("events");

const emitter = new event();

emitter.on("greet",(name)=>{
    console.log(`hi, ${name}`)
})

emitter.emit("greet","solomon")


