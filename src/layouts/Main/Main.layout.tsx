import React, { FunctionComponent } from 'react';
import Header from 'components/Header';
import { Route } from 'routes';

import styles from './Main.layout.module.css';

type Props = {
  route: Route;
};

const MainLayout: FunctionComponent<Props> = ({ route, children }) => {
  return (
    <div className={styles.mainLayout}>
      <Header title={route.title} subtitle={route.subtitle} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default MainLayout;
