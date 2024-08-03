//@ts-nocheck
const express = require("express");
const next = require("next");
const axios = require("axios");
const dev = process.env.NODE_ENV !== "production";
const cron = require("node-cron");
const http = require("http");
const { Server } = require("socket.io");
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();
  const httpServer = http.createServer(server);
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });

    socket.on("message", (msg) => {
      console.log("message: " + msg);
      io.emit("message", msg); // Broadcast the message to all clients
    });
  });

  // Scheduler
  const runScheduler = async () => {
    cron.schedule("*/5 * * * * *", async () => {

      console.log("# Running scheduler every 5 seconds #");

      // const coinsData = await axios.get("http://localhost:3000/api/poll");
      // io.emit("message", coinsData.data.data);
    });
  };

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;
  httpServer.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    runScheduler();
  });
});
