import timeToSeconds from "../../common/utils/date";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";

const Stopwatch = () => {
  console.log('conversao: ', timeToSeconds('01:01:01'))
  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start the timer</p>
      <div className={style.clockWrapper}>
          <Clock/>
      </div>
      <Button text="Start" />
    </div>
  );
};

export default Stopwatch;