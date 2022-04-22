import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Stopwatch from "../components/Stopwatch";
import ITasks from "../types/Taskes";
import style from "./style.module.scss";

const App = () => {
  const [tasks, setTasks] = useState<ITasks[]> ([])

  return (
    <div className={style.AppStyle}>
      <Form  setTasks={setTasks}/>
      <List tasks = {tasks}/>
      <Stopwatch />
    </div>
  );
};

export default App;
