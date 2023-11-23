import express from "express";
import UsuarioRouter from "./src/routes/UsuarioRouter";
import LeilaoRouter from "./src/routes/LeilaoRouter";
import LanceRouter from "./src/routes/LanceRouter";


const server = express();


server.use(express.urlencoded({extended: true}));
server.use(express.json());

server.use(UsuarioRouter);
server.use(LeilaoRouter);
server.use(LanceRouter);

server.listen(3000);
