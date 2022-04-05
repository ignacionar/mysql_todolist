import React, { useEffect, useState } from "react";
import TodosDiv from "./components/TodosDiv";
import { SearchBar } from "./components/SearchBar";
import { getData } from "./utils/getData";
import { AddTodos } from "./components/AddTodos";
import { AddUser } from "./components/AddUser";

function App() {  
  const [todosData, setTodosData] = useState([]);


  const [user, setUser] = useState({username: null,
    userId: null});

  useEffect(() => {
    if (user.username) {
      console.log(user)
      getData(setTodosData, user.userId);
    }
  }, [user]);

  return (
    <div className="wrapper">
      {user.username ? (
        <>
          <AddTodos
            addTodos={(a: any) => {
              setTodosData(a);
            }}
            userId={user.userId}
          />
          <SearchBar
            todos={todosData}
            refreshTodos={(a: any) => {
              if (a[0]) {
                return setTodosData(a);
              }
              setTodosData(todosData);
            }}
            userId={user.userId}
          />
          <TodosDiv
            todos={todosData}
            refreshTodos={(a: any) => {
              setTodosData(a);
            }}
            userId={user.userId}
          />
        </>
      ) : (
        <>
          <AddUser addUser={(a: any) => {
            setUser({username: a.username, userId: a.id})
          }}/>
        </>
      )}
    </div>
  );
}

export default App;
