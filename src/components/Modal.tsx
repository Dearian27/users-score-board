import React, { ChangeEvent, useState } from "react";
import User from "./User";
import { UserParams } from "../App";
import "./styles.css";

const Modal = ({
  setOpenHandler,
  setUsersHandler,
  usersState,
}: {
  setOpenHandler: (state: boolean) => void;
  setUsersHandler: (data: UserParams[]) => void;
  usersState: UserParams[];
}) => {
  const [input, setInput] = useState("");
  const addUser = () => {
    const newUsers = usersState;

    newUsers.push({
      id: usersState.length ? usersState[usersState.length - 1].id + 1 : 0,
      name: input,
      value: 0,
    });
    setUsersHandler(newUsers);
    setInput("");
  };
  const saveUsers = () => {
    localStorage.setItem("users", JSON.stringify(usersState));
    setOpenHandler(false);
  };
  const deleteUser = (id: number) => {
    const newUsers = usersState.filter((user) => user.id !== id);
    setUsersHandler(newUsers);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        {usersState.map((user: UserParams) => {
          return (
            <User
              key={user.id}
              id={user.id}
              deleteUser={deleteUser}
              name={user.name}
            />
          );
        })}
        <input
          type="text"
          className="addUser"
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
        <button onClick={addUser}>+</button>
        <button onClick={saveUsers}>save</button>
      </div>
    </div>
  );
};

export default Modal;
