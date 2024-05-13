require("dotenv").config();

const express = require("express");
const cors = require("cors");

const usersRoutes = require("./routes/users");
const gameRoutes = require("./routes/game");
var bodyParser = require("body-parser");

const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    console.log("success mongo connection");
  })
  .catch((e) => {
    console.error("error mongo: ", e);
  });

  const app = express();

app.use(bodyParser.json());

app.use(cors({
  origin: "*",
}));

app.use("/users", usersRoutes);
app.use("/game/:idUser", gameRoutes);

app.listen(PORT, () => {
  console.log(`Server launched on PORT : ${process.env.PORT || 4000}. 🦒`);
});

// socket io
const http = require("http");
const socketIo = require("socket.io");

const server = http.createServer(app);
const io = socketIo(server);

// Middleware pour servir les fichiers statiques
app.use(express.static("public"));

io.on('connection', (socket) => {
  console.log('a new user connected')
})

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Serveur socket.io sur le port ${PORT}`);
});
