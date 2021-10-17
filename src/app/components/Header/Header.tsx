import React from 'react';
import styles from './Header.module.css';

type HeaderProps = {
  onLogoClick: () => void;
  onAboutClick: () => void;
};

export default function Header({
  onLogoClick,
  onAboutClick,
}: HeaderProps): JSX.Element {
  return (
    <header className={styles.header}>
      <h1 onClick={onLogoClick}>Fitzgerald</h1>
      <p onClick={onAboutClick}>about</p>
    </header>
  );
}
