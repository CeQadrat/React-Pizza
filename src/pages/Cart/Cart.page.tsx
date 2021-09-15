import Button from 'components/Button';
import React, { FunctionComponent } from 'react';

import CartItem from 'components/CartItem';
import { ReactComponent as CartIcon } from 'static/icons/cart.svg';
import { ReactComponent as TrashIcon } from 'static/icons/trash.svg';
import { ReactComponent as BackArrowIcon } from 'static/icons/backArrow.svg';
import { ReactComponent as ShoppingCartImage } from 'static/images/shoppingCart.svg';

import styles from './Cart.page.module.css';

const Cart: FunctionComponent = () => {
  const items = [
    {
      name: 'Test',
      count: 2,
      dough: 'testo',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/react-pizza-c5cf2.appspot.com/o/image%207.png?alt=media&token=00108157-99a6-4199-8542-fde29941e9e5',
      price: 770,
      size: 'size',
    },
  ];
  const totalCount = 3;
  const totalPrice = 900;

  if (items.length === 0) {
    return (
      <div className={styles.cartEmptyPage}>
        <div className={styles.cartTitleName}>Корзина пустая 😕</div>
        <div className={styles.description}>
          Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
          пиццу, перейди на главную страницу.
        </div>
        <ShoppingCartImage className={styles.shoppingCartImage} />
        <Button variant="contained" color="default">
          Вернуться назад
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartTitle}>
        <div className={styles.cartTitleName}>
          <CartIcon />
          Корзина
        </div>
        <Button variant="text" startIcon={<TrashIcon />}>
          Очистить корзину
        </Button>
      </div>
      <div className={styles.items}>
        {items.map((item) => (
          <CartItem key={item.name} item={item} />
        ))}
      </div>
      <div className={styles.totalInfo}>
        <div>
          {`Всего пицц: `}
          <b>{`${totalCount} шт.`}</b>
        </div>
        <div className={styles.totalPrice}>
          {`Сумма заказа: `}
          <b>{`${totalPrice} ₽`}</b>
        </div>
      </div>
      <div className={styles.actions}>
        <Button color="default" startIcon={<BackArrowIcon />}>
          Вернуться назад
        </Button>
        <Button variant="contained">Оплатить сейчас</Button>
      </div>
    </div>
  );
};

export default Cart;
