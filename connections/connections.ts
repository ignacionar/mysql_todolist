import mysql from 'mysql';

export function insertTodos(connection : any, data : any, callback : any) {
  let insertQuery = "INSERT INTO Todos (todoText) VALUES (?)";

  let query = mysql.format(insertQuery, [data.todoText]);

  connection.query(query, (err : any, result : any) => {
    if (err) throw err;
    callback(result);
  })

}

export function readTodos(connection : any, callback : any) {
  let readQuery = 'SELECT * FROM Todos';
  connection.query(readQuery, (err: any, result: any) => {
    if (err) throw err;
    callback(result);
  })
}

export function updateTodos(connection : any, data : any, callback : any) {
  let updateQuery = 'UPDATE todos SET todoText = ? WHERE id = ?';
  let query = mysql.format(updateQuery, [data.todoText, data.id]);

  connection.query(query, (err: any, result: any) => {
    if (err) throw err;
    callback(result);
  })
}

export function deleteTodos(connection : any, data : any, callback : any) {
  let deleteQuery = 'DELETE FROM todos WHERE id = ?';
  let query = mysql.format(deleteQuery, [data.id]);

  connection.query(query, (err : any, result: any) => {
    if (err) throw err;
    callback(result)
  })
}