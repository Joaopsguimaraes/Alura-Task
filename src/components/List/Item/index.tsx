import style from "../../List/style.module.scss";

const Items = ({task, time}:{task:string, time: string}) => {
  return (
    <li className={style.item}>
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
};

export default Items;
