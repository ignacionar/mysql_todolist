import React from "react";
import { fetchData } from "../utils/fetchData";
import { getData } from "../utils/getData";

interface AddTodosFn {
  addTodos: (arg: any) => void;
  userId: any;
}

export class AddTodos extends React.Component<AddTodosFn> {
  handleSubmit(e: any) {
    if (e.keyCode === 13 && e.target.value) {
      fetchData("POST", e.target.value, null, this.props.userId);
      setTimeout(() => {
        getData(this.props.addTodos, this.props.userId);
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