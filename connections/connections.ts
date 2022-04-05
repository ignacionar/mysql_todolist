import mysql from "mysql";

export function insertTodos(connection: any, data: any, callback: any) {
  let insertQuery = "INSERT INTO Todos (todoText, userId) VALUES (?, ?)";

  let query = mysql.format(insertQuery, [data.todoText, data.userId]);

  connection.query(query, (err: any, result: any) => {
    if (err) throw err;
    callback(result);
  });
}

export function readTodos(connection: any, data: any, callback: any) {
  let searchQuery = "SELECT * FROM Todos WHERE userId = (?)";
  let query = mysql.format(searchQuery, [data.userId]);
  connection.query(query, (err: any, result: any) => {
    if (err) throw err;
    callback(result);
  });
}

export function updateTodos(connection: any, data: any, callback: any) {
  let updateQuery = "UPDATE todos SET todoText = ? WHERE id = ?";
  let query = mysql.format(updateQuery, [data.todoText, data.id]);

  connection.query(query, (err: any, result: any) => {
    if (err) throw err;
    callback(result);
  });
}

export function deleteTodos(connection: any, data: any, callback: any) {
  let deleteQuery = "DELETE FROM todos WHERE id = (?)";
  let query = mysql.format(deleteQuery, [data.id]);

  connection.query(query, (err: any, result: any) => {
    if (err) throw err;
    callback(result);
  });
}

export function insertUser(connection: any, data: any, callback: any) {
  let insertQuery = "INSERT INTO Users (username) VALUES (?)";

  let query = mysql.format(insertQuery, [data.username]);

  connection.query(query, (err: any, result: any) => {
    if (err) throw err;
    callback(result);
  });
}

export function searchUser(connection: any, data: any, callback: any) {
  let searchQuery = "SELECT * FROM Users WHERE username = (?)";
  let query = mysql.format(searchQuery, [data.username]);
  connection.query(query, (err: any, result: any) => {
    if (err) throw err;
    callback(result);
    console.log(result);
  });
}
