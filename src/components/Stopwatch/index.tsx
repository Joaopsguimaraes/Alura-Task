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

  function regressive(count:number = 0) {
      setTimeout(() => {
        if(count > 0){
          setTime(count - 1);
          return regressive(count - 1);
        }
      },1000)
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start the timer</p>
      <div className={style.clockWrapper}>
        <Clock time={time}/>
      </div>
      <Button text="Start" onClick={() => regressive(time)}/>
    </div>
  );
};

export default Stopwatch;
