import React from 'react';

import styles from './Sidebar.module.scss';

interface SidebarProps {}

function Sidebar({}: SidebarProps) {
  return <div className={styles.Sidebar}>Sidebar</div>;
}

export default Sidebar;
