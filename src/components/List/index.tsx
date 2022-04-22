import ITasks from "../../types/Taskes";
import Items from "./Item";
import style from "./style.module.scss";

const List = ({tasks}: {tasks: ITasks[]} ) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>
        Studies of the day
      </h2>
      <ul>
        {tasks.map((item, index) => (
          <Items key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
