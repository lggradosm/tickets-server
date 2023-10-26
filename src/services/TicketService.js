
  import {getIo} from '../socket.js'
  let queue = [];
  let counter = 1;
 

  export const createTicket =  (req) => {
    const code = counter.toString().padStart(5,'0')
     queue.push( {'id':code})
     counter ++;
     getIo().sockets.emit('queue',queue)
    return  {'id':code}
  }

  export const nextTicket  = () => {
    if( queue === null) return []
    const ticket =  queue[0]
    if(queue.length < 1) return []
    queue.shift();
    getIo().sockets.emit('queue',queue)
    return ticket
  }

  export const getAllTickets = () =>{
    return  queue;
  }

  export const clear = ()=> {
    queue = []
    counter = 1
    getIo().sockets.emit('queue',queue)
  }