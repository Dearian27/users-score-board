import "./styles.css";

const User = ({
  id,
  name,
  deleteUser,
}: {
  id: number;
  name: string;
  deleteUser: (id: number) => void;
}) => {
  return (
    <div className="user-container">
      {id} {name}
      <button onClick={() => deleteUser(id)} className="deleteBtn">
        delete
      </button>
    </div>
  );
};

export default User;
