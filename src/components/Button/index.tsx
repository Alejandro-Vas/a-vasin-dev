import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface IButton {
    onClick?: () => void;
    children?: ReactNode
}

function Button({ onClick = () => null, children }: IButton) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={styles.button}
    >
      {children}
    </button>
  );
}

export default Button;
