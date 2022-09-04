import React from 'react';

import styles from './Navbar.module.scss';

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  return <div className={styles.Navbar}>Navbar</div>;
}

export default Navbar;
