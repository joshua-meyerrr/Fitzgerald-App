import React from 'react';
import styles from './Header.module.css';

type HeaderProps = {
  onLogoClick: () => void;
  onAboutClick: () => void;
  className?: string;
};

export default function Header({
  className,
  onLogoClick,
  onAboutClick,
}: HeaderProps): JSX.Element {
  return (
    <header className={`${styles.header} ${className}`}>
      <h1 onClick={onLogoClick}>Fitzgerald</h1>
      <p onClick={onAboutClick}>about</p>
    </header>
  );
}
