import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { Routes } from 'routes';
import Button from 'components/Button';
import { ReactComponent as CartIcon } from 'static/icons/cart.svg';
import logo from 'static/images/logo.png';
import { useStore } from 'contexts/StoreContext';

import styles from './Header.module.css';

type Props = {
  title: string;
  subtitle: string;
};

const Title: FunctionComponent<Props> = ({ title, subtitle }) => {
  const { cartStore } = useStore();
  const history = useHistory();

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to={Routes.main.path}>
        <img src={logo} alt="React pizza" />
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
      </Link>
      <div className={styles.cartContainer}>
        <Button
          color="primary"
          variant="contained"
          onClick={() => history.push(Routes.cart.path)}
        >
          <span>{`${cartStore.totalPrice} ₽`}</span>
          <span className={styles.cartDelimiter} />
          <CartIcon className={styles.cartIcon} />
          <span>{`${cartStore.totalCount}`}</span>
        </Button>
      </div>
    </header>
  );
};

export default observer(Title);
