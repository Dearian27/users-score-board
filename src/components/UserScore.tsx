import React from "react";
import "./styles.css";

const UserScore = ({
  value,
  name,
  id,
  changeValue,
  maxValue,
}: {
  maxValue: number;
  value: number;
  name: string;
  id: number;
  changeValue: (id: number, value: number | null) => void;
}) => {
  const progress = (100 * value) / maxValue;
  return (
    <div className="user-item">
      <div className="score">
        {value}
        <div className="progress" style={{ height: `${progress}%` }} />
      </div>
      <div className="name">{name}</div>
      <div className="actions">
        <button
          className="ctrl-btn"
          onClick={() => {
            if (value <= 0) {
              changeValue(id, null);
            } else changeValue(id, value - 1);
          }}
        >
          -
        </button>
        <button
          className="ctrl-btn"
          onClick={() => {
            changeValue(id, value + 1);
          }}
        >
          +
        </button>
        <button
          className="ctrl-btn"
          onClick={() => {
            changeValue(id, null);
          }}
        >
          R
        </button>
      </div>
    </div>
  );
};

export default UserScore;
