"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
let allSockets = [];
wss.on("connection", (socket) => {
    allSockets.push(socket);
    console.log("user connected");
    socket.on("message", (message) => {
        console.log("message received: " + message.toString());
        for (let i = 0; i < allSockets.length; i++) {
            const s = allSockets[i];
            s.send(message.toString() + ": sent from the server");
        }
    });
    socket.on("disconnect", () => {
        allSockets = allSockets.filter((x) => x != socket);
    });
});
