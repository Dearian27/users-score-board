import { useState } from "react";
import "./App.css";
import "./components/styles.css";
import Modal from "./components/Modal";
import UserScore from "./components/UserScore";

export type UserParams = {
  id: number;
  name: string;
  value: number;
};

function App() {
  const [usersState, setUsers] = useState<UserParams[]>(
    JSON.parse(localStorage.getItem("users") || "[]")
  );
  const setUsersHandler = (data: UserParams[]) => {
    setUsers(data);
  };
  const [open, setOpen] = useState(false);
  const setOpenHandler = (value: boolean) => {
    setOpen(value);
  };

  const changeValue = (id: number, value: number | null = null) => {
    const newUsers = [...usersState];
    if (!value) {
      newUsers.find((user) => user.id == id)!.value = 0;
    } else {
      newUsers.find((user) => user.id == id)!.value = value;
    }
    setUsers(newUsers);
    localStorage.setItem("users", JSON.stringify(newUsers));
  };

  return (
    <>
      <button className="modal-button" onClick={() => setOpenHandler(!open)}>
        modal
      </button>
      <div className="board">
        {usersState.map((user: UserParams) => {
          const maxValue = usersState.reduce(
            (acc, next) => {
              if (next?.value > acc?.value) {
                acc = next;
              }
              return acc;
            },
            { id: -1, value: -1, name: "" }
          );
          console.log(maxValue);
          return (
            <UserScore
              id={user.id}
              name={user.name}
              value={user.value}
              key={user.id}
              changeValue={changeValue}
              maxValue={maxValue.value}
            />
          );
        })}
      </div>
      {open && (
        <Modal
          setOpenHandler={setOpenHandler}
          setUsersHandler={setUsersHandler}
          usersState={usersState}
        />
      )}
    </>
  );
}

export default App;
