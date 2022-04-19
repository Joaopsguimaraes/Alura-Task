import * as React from "react";
import Button from "../Button";
import style from "./style.module.scss";

const Form = () => {
  return (
    <form className={style.novaTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adiciona um novo estudo</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="O que quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Tempo</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
        />
      </div>
      <Button />
    </form>
  );
};

export default Form;
