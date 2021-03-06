import React, { memo } from "react";
import { fetchData } from "../utils/fetchData";
import { getData } from "../utils/getData";

interface TodoParagraphProps {
  refreshTodos: (arg: any) => void;
  todoText: string;
  id: number;
  userId: any;
}

interface TodoParagraphState {
  editMode: boolean;
}

class TodoParagraph extends React.Component<
  TodoParagraphProps,
  TodoParagraphState
> {
  constructor(props: TodoParagraphProps) {
    super(props);
    this.state = {
      editMode: false,
    };
  }

  handleDobClick() {
    this.setState({
      editMode: true,
    });
  }

  handleEnter(e: any) {
    if (e.keyCode === 13 && e.target.value) {
      fetchData("PUT", e.target.value, this.props.id, null);
      setTimeout(() => {
        getData(this.props.refreshTodos, this.props.userId);
      }, 50);
      this.setState({
        editMode: false,
      });
    }
  }

  render() {
    return !this.state.editMode ? (
      <p onDoubleClick={() => this.handleDobClick()}>{this.props.todoText}</p>
    ) : (
      <input onKeyDown={(e) => this.handleEnter(e)} type={"text"} />
    );
  }
}

interface TodosDivProps {
  todos: TodoProps[];
  refreshTodos: (arg: any) => void;
  userId: any;
}

interface TodoProps {
  todoText: string;
  id: number;
}

// FUNCTION COMP
const TodosDiv: React.FC<TodosDivProps> = (props: any): JSX.Element => {
  function handleClick(id: number) {
    fetchData("DELETE", null, id, null);

    setTimeout(() => {
      getData(props.refreshTodos, props.userId);
    }, 50);
  }

  return props.todos.map((todo: any) => (
    <div key={todo.id}>
      <TodoParagraph
        refreshTodos={props.refreshTodos}
        todoText={todo.todoText}
        id={todo.id}
        userId={props.userId}
      />
      <button
        onClick={() => {
          handleClick(todo.id);
        }}
      >
        X
      </button>
    </div>
  ));
};

export default memo(TodosDiv);
