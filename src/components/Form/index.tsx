import React, { useState } from "react";
import ITasks from "../../types/Taskes";
import Button from "../Button";
import style from "./style.module.scss";

const Form = ({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<ITasks[]>>;
}) => {
  const [study, setStudy] = useState("");
  const [time, setTime] = useState("");

  const addTool = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(study, time)
  };

  return (
    <form className={style.novaTarefa} onSubmit={addTool}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add a new study</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="What do you want to study?"
          required
          value={study}
          onChange={(event) => setStudy(event.target.value)}
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
