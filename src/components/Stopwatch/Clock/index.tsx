import style from "./Clock.module.scss";

interface Props {
  time: Number | undefined;
}

const Clock = ({ time = 0 }: Props) => {
  const minuts = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutsDez, minutsUn] = String(minuts).padStart(2, "0");
  const [secondsDez, secondsUn] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.clockNumber}>{minutsDez}</span>
      <span className={style.clockNumber}>{minutsUn}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondsDez}</span>
      <span className={style.clockNumber}>{secondsUn}</span>
    </>
  );
};

export default Clock;
