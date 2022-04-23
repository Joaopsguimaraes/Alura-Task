import style from "./style.module.scss";
interface Props {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button = ({ text, type }: Props) => {
  return (
    <button type={type} className={style.button}>
      {text}
    </button>
  );
};

export default Button;
