import "./styles.css";

const colors = ["#62ff32", "#62ff32", "#ffe032", "#327dff", "#cc32ff"];

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
  let progress = 0;
  if (maxValue !== 0) {
    progress = (100 * value) / maxValue;
  }
  return (
    <div className="user-item">
      <div className="score">
        {value}
        <div
          className="progress"
          style={{
            height: `${progress === 0 ? 1 : progress}%`,
            backgroundColor: colors[id % colors.length],
          }}
        />
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
