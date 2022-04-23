import ITasks from "../../types/Taskes";
import Items from "./Item";
import style from "./style.module.scss";

interface Props {
  tasks: ITasks[];
  selectTask: (taskSelected: ITasks) => void;
}

const List = ({ tasks, selectTask }: Props) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Studies of the day</h2>
      <ul>
        {tasks.map((item) => (
          <Items key={item.id} selectTask={selectTask} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
