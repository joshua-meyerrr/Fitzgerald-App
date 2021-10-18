import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  type:
    | 'circle'
    | 'circleWhite'
    | 'icon'
    | 'squareSmall'
    | 'squareBig'
    | 'rectangle';
  color?: string;
  onButtonClick?: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  type,
  onButtonClick,
  className,
  children,
  color,
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={onButtonClick}
      className={`${styles.button} ${styles[`type--${type}`]} ${className}`}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
}
