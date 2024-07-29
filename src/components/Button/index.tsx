import React from "react";
import { ButtonHTMLAttributes } from "react";
import { CircularProgress } from "@mui/material";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface ButtonInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Define o tema do botão.
   * @default "primary"
   */
  theme?: "primary" | "secondary";
  /**
   * Define o tamanho do botão.
   * @default "medium"
   */
  size?: "small" | "medium" | "large";
  /**
   * Texto exibido dentro do botão.
   * Desativa a operação do botão durante o loading
   */
  placeholder: string | React.ReactNode;
  /**
   * Propriedade booleana que indica o estado de carregamento do botão, substituindo o texto por um spinner  */
  isloading?: boolean;
  /**
   * Desativa o botão e insira um tema cinza.
   * */
  disabled?: boolean;
  /**
   * Evento de clique do mouse.
   * Obs: só é acionado quando o botão não está com o loading ativo.
   */
  onClick?: () => void;
}

export function Button(props: ButtonInterface) {
  const {
    theme = "primary",
    size = "medium",
    placeholder,
    isloading,
    disabled,
    onClick,
    ...rest
  } = props;

  function handleClickOnButton() {
    if (isloading) {
      return;
    }

    onClick && onClick();
  }

  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: theme === "primary",
        [styles.secondary]: theme === "secondary",
        [styles.buttonSizeSmall]: size === "small",
        [styles.buttonSizeMedium]: size === "medium",
        [styles.buttonSizeLarge]: size === "large",
      })}
      disabled={disabled}
      onClick={handleClickOnButton}
      {...rest}
    >
      {isloading ? <CircularProgress /> : <>{placeholder}</>}
    </button>
  );
}
