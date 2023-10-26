import {Server} from 'socket.io'

let io
export const initializeSocketServer  = (httpServer) => {
  io = new Server(httpServer, {cors: {origin: '*'}})
  io.on('connection', (socket) => {
    console.log('user conection')
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  })
}

export function getIo () {
  if(!io) {throw new Error('servidor aun no esta inicializado')}
  return io
}

