const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const app = express();

// Create Server
const server = http.createServer(app);

// Create Io And Connect Server To Frontend
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true
    }
})

// This Map Store UserId And SocketId Key:Value Form
const userSocketMap = {};

// Get ReceiverSocketId
const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

// Connect Socket To Frontend
io.on("connection", (socket) => {
    // Access UserId Into Frontend Query Send 
    const userId = socket.handshake.query?.userId;

    if (userId != undefined) {
        userSocketMap[userId] = socket.id
    }

    io.emit("getOnlineUser", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        delete userSocketMap[userId];
        io.emit("getOnlineUser", Object.keys(userSocketMap));
    })
})

module.exports = { app, server, io, getReceiverSocketId };