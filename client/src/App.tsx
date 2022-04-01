import React, { useEffect, useState } from "react";
import TodosDiv from "./components/TodosDiv";
import { getData } from "./utils/getData";
import { fetchData } from "./utils/fetchData";

interface SearchProps {
  todos: TodoProps[];
  searchTodos: (arg: any) => void;
  refreshTodos: (arg: any) => void;
}

interface TodoProps {
  todoText: string;
  id: number;
}

class Search extends React.Component<SearchProps> {
  handleSearch(e: any) {
    if (!e.target.value) {
      getData(this.props.refreshTodos);
    }
    this.props.searchTodos(
      this.props.todos.filter((todo) => todo.todoText.includes(e.target.value))
    );
  }

  render() {
    return (
      <input
        type={"text"}
        className="search"
        placeholder="Search TODOS..."
        onChange={(e) => this.handleSearch(e)}
      ></input>
    );
  }
}

interface AddTodosFn {
  addTodos: (arg: any) => void;
}

class AddTodos extends React.Component<AddTodosFn> {
  handleSubmit(e: any) {
    if (e.keyCode === 13 && e.target.value) {
      fetchData("POST", e.target.value, null);
      setTimeout(() => {
        getData(this.props.addTodos);
      }, 50);
      e.target.value = "";
    }
  }
  render() {
    return (
      <input
        type={"text"}
        className="search"
        placeholder="Add TODOS..."
        onKeyDown={(e) => {
          this.handleSubmit(e);
        }}
      ></input>
    );
  }
}

function App() {
  const [todosData, setTodosData] = useState([]);

  useEffect(() => {
    getData(setTodosData);
  }, []);

  return (
    <div className="wrapper">
      <AddTodos
        addTodos={(a: any) => {
          setTodosData(a);
        }}
      />
      <Search
        todos={todosData}
        searchTodos={(a: any) => {
          setTodosData(a);
        }}
        refreshTodos={(a: any) => {
          setTodosData(a);
        }}
      />
      <TodosDiv
        todos={todosData}
        refreshTodos={(a: any) => {
          setTodosData(a);
        }}
      />
    </div>
  );
}

export default App;
