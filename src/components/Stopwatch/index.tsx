import { useEffect, useState } from "react";
import timeToSeconds from "../../common/utils/time";
import ITasks from "../../types/Taskes";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

interface Props {
  selected: ITasks | undefined;
}

const Stopwatch = ({ selected }: Props) => {
  const [time, setTime] = useState<Number>();
  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start the timer</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button text="Start" />
    </div>
  );
};

export default Stopwatch;
