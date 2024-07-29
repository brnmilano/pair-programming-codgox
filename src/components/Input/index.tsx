import { InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";
import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Define o texto exibido na label do input.
   */
  label: string;
  /**
   * Define a máscara de entrada para o input.
   */
  mask?: string;
  /**
   * Define a mensagem de erro exibida abaixo do input.
   */
  errorMessage?: string;
  /**
   * Propriedade booleana que indica se há um erro no input.
   */
  error?: boolean;
}

export function Input({
  label,
  error,
  errorMessage,
  placeholder,
  value,
  mask,
  ...rest
}: InputProps) {
  return (
    <div className={styles.container} style={{ width: "100%" }}>
      <label htmlFor={label} className={styles.label}>
        {label}
      </label>

      <InputMask
        {...rest}
        id={label}
        maskChar={null}
        mask={mask ? mask : ""}
        placeholder={placeholder}
        className={`${styles.input} ${error && styles.error}`}
        value={value}
      />

      <p
        className={`${styles.errorMessage} ${error && styles.showErrorMessage}`}
      >
        {errorMessage}
      </p>
    </div>
  );
}
