import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

let allSockets: User[] = [];

wss.on("connection", (socket) => {
  socket.on("message", (message) => {
    const messageData = JSON.parse(message); // because in message we will gate stringify objects

    if (messageData.type === "join") {
      allSockets.push({
        socket,
        room,
      });
    }
  });
  //   socket.on("disconnect", () => {
  //     allSockets = allSockets.filter((x) => x != socket);
  //   });
});
