import type { InputHTMLAttributes } from "react";
import styles from "./styles.module.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: InputProps) => {
  return <input className={styles.input} {...props} />;
};

export default Input;