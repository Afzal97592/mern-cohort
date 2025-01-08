"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    socket.on("message", (message) => {
        // @ts-ignore
        const messageData = JSON.parse(message); // because in message we will gate stringify objects
        if (messageData.type === "join") {
            allSockets.push({
                socket,
                room: messageData.payload.roomId,
            });
        }
        if (messageData.type === "chat") {
            let currentUserRoom = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].socket === socket) {
                    currentUserRoom = allSockets[i].room;
                }
            }
            //   const currentUserRoom = allSockets.find((x) =>
            //     x.socket === socket ? x.room : ""
            //   );
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i].room == currentUserRoom) {
                    allSockets[i].socket.send(messageData.payload.message);
                }
            }
        }
    });
    //   socket.on("disconnect", () => {
    //     allSockets = allSockets.filter((x) => x != socket);
    //   });
});
