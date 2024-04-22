import { Server } from "socket.io";

let io;
export const initializeSocketServer = (httpServer) => {
  io = new Server(httpServer, { cors: { origin: "*" } });
  io.on("connection", (socket) => {
    console.log("user conection");
    socket.on("joinRoom", (roomName) => {
      socket.join(roomName);
      console.log(`Client joined room: ${roomName}`);
    });
    socket.on("mensaje", () => {
      console.log("usertv connected");
    });
    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
    socket.on("keep-alive", () => {
      console.log("Recibido keep-alive del cliente");
      // No es necesario hacer nada aquí, simplemente el acto de recibir el mensaje mantendrá la conexión activa
    });
  });
};

export function getIo() {
  if (!io) {
    throw new Error("servidor aun no esta inicializado");
  }
  return io;
}
