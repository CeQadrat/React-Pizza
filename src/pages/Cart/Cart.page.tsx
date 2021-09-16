import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router';
import { observer } from 'mobx-react';

import Button from 'components/Button';
import CartItem from 'components/CartItem';
import { ReactComponent as CartIcon } from 'static/icons/cart.svg';
import { ReactComponent as TrashIcon } from 'static/icons/trash.svg';
import { ReactComponent as BackArrowIcon } from 'static/icons/backArrow.svg';
import { ReactComponent as ShoppingCartImage } from 'static/images/shoppingCart.svg';
import { useStore } from 'contexts/StoreContext';

import styles from './Cart.page.module.css';

const Cart: FunctionComponent = observer(() => {
  const { cartStore } = useStore();
  const history = useHistory();

  if (cartStore.items.length === 0) {
    return (
      <div className={styles.cartEmptyPage}>
        <div className={styles.cartTitleName}>Корзина пустая 😕</div>
        <div className={styles.description}>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </div>
        <ShoppingCartImage className={styles.shoppingCartImage} />
        <Button
          variant="contained"
          color="default"
          onClick={() => history.goBack()}
        >
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
        <Button
          variant="text"
          startIcon={<TrashIcon />}
          onClick={() => cartStore.clearCart()}
        >
          Очистить корзину
        </Button>
      </div>
      <div className={styles.items}>
        {cartStore.items.map((item) => (
          <CartItem key={item.name} item={item} />
        ))}
      </div>
      <div className={styles.totalInfo}>
        <div>
          {`Всего пицц: `}
          <b>{`${cartStore.totalCount} шт.`}</b>
        </div>
        <div className={styles.totalPrice}>
          {`Сумма заказа: `}
          <b>{`${cartStore.totalPrice} ₽`}</b>
        </div>
      </div>
      <div className={styles.actions}>
        <Button
          color="default"
          startIcon={<BackArrowIcon />}
          onClick={() => history.goBack()}
        >
          Вернуться назад
        </Button>
        <Button variant="contained">Оплатить сейчас</Button>
      </div>
    </div>
  );
});

export default Cart;
