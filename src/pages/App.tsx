import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import ITasks from "../types/Taskes";
import style from "./style.module.scss";

const App = () => {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [select, setSelect] = useState<ITasks>();

  const selectTask = (taskSelected: ITasks) => {
    setSelect(taskSelected);
    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        select: task.id === taskSelected.id ? true : false,
      }))
    );
  };
  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Stopwatch />
    </div>
  );
};

export default App;
