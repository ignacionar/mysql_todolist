import React from "react";
import { getData } from "./../utils/getData";

interface SearchProps {
  todos: TodoProps[];
  refreshTodos: (arg: any) => void;
  userId: any;
}

interface TodoProps {
  todoText: string;
  id: number;
}

export class SearchBar extends React.Component<SearchProps> {
  handleSearch(e: any) {
    if (!e.target.value) {
      return getData(this.props.refreshTodos, this.props.userId);
    }
    this.props.refreshTodos(
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
