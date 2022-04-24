import ITasks from "../../../types/Taskes";
import style from "./Item.module.scss";

interface Props extends ITasks {
  selectTask: (taskSelected: ITasks) => void;
}

const Items = ({ task, time, select, completed, id, selectTask }: Props) => {
  return (
    <li
      className={`${style.item} ${select ? style.itemSelected : ""} ${
        completed ? style.itemCompleted : ""
      }`}
      onClick={() =>
        !completed &&
        selectTask({
          task,
          time,
          select,
          completed,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completed && (
        <span className={style.concluded} aria-label="task completed"></span>
      )}
    </li>
  );
};

export default Items;
