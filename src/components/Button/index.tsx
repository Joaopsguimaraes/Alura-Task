import style from "./style.module.scss";
interface Props {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button = ({ text, type, onClick }: Props) => {
  return (
    <button onClick={onClick} type={type} className={style.button}>
      {text}
    </button>
  );
};

export default Button;
