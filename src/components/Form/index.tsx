import React, { useState } from "react";
import ITasks from "../../types/Taskes";
import Button from "../Button";
import style from "./style.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
}

const Form = ({ setTasks }: Props) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [select, setSelect] = useState(false);
  const [completed, setcompleted] = useState(false);
  const [id, setId] = useState(uuidv4());

  const addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks((oldTasks) => [
      ...oldTasks,
      { task, time, select, completed, id },
    ]);
    setTask("");
    setTime("");
    setId("");
  };
  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add a new study</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="What do you want to study?"
          required
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
          value={time}
          onChange={(event) => setTime(event.target.value)}
        />
      </div>
      <Button type="submit" text="Send" />
    </form>
  );
};

export default Form;
