import express from "express";
import dotenv from "dotenv";
import mysql from "mysql";
import cors from "cors";
import {
  deleteTodos,
  insertTodos,
  insertUser,
  readTodos,
  updateTodos,
  searchUser,
} from "../connections/connections";

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

const PORT = process.env.PORT;

const server = express();

server.use(cors());

server.use(express.json());

server.post("/todos", (req: any, res: any) => {
  insertTodos(connection, req.body, (result: any) => {
    res.json(result);
  });
});

server.post("/user-todos", (req: any, res: any) => {
  readTodos(connection, req.body, (result: any) => {
    res.json(result);
  });
});

server.post("/users", (req: any, res: any) => {
  insertUser(connection, req.body, (result: any) => {
    res.json(result);
  });
});

server.put("/users", (req: any, res: any) => {
  searchUser(connection, req.body, (result: any) => {
    res.json(result);
    if (!result) {
      return false;
    }
  });
});

server.put("/todos", (req: any, res: any) => {
  updateTodos(connection, req.body, (result: any) => {
    res.json(result);
  });
});

server.delete("/todos", (req: any, res: any) => {
  deleteTodos(connection, req.body, (result: any) => {
    res.json(result);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
