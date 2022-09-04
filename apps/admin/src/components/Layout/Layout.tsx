import React from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

import styles from './Layout.module.scss';

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  return (
    <div className={styles.Layout}>
      <Sidebar />
      <div className={styles.RightSide}>
        <Navbar />
        <div className={styles.Content}>{children}</div>
      </div>
    </div>
  );
}

export default Layout;
