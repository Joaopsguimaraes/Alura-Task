import style from "./style.module.scss";

const Button = ({
  text,
  type,
}: {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
}) => {
  return (
    <button type={type} className={style.button}>
      {text}
    </button>
  );
};

export default Button;
