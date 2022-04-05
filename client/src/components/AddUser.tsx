import React from "react";
import { getUser } from "../utils/getUser";

interface AddUserFn {
  addUser: (arg: any) => void;
}

export class AddUser extends React.Component<AddUserFn> {
  handleSubmit(e: any) {
    if (e.keyCode === 13 && e.target.value) {
      getUser(e.target.value, this.props.addUser);
    }
  }

  render() {
    return (
      <input
        type={"text"}
        placeholder={"Insert user"}
        className="search"
        onKeyDown={(e) => this.handleSubmit(e)}
      />
    );
  }
}
