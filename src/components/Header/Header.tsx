import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Routes } from 'routes';
import logo from 'static/images/logo.png';

import styles from './Header.module.css';

type Props = {
  title: string;
  subtitle: string;
};

const Title: FunctionComponent<Props> = ({ title, subtitle }) => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to={Routes.main.path}>
        <img src={logo} alt="React pizza" />
        <div className={styles.title_container}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </Link>
      <div className={styles.cartContainer}>
        <Link to={Routes.cart.path}>Cart</Link>
      </div>
    </header>
  );
};

export default Title;
