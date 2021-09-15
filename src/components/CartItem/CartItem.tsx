import React, { FunctionComponent } from 'react';

import IconButton from 'components/IconButton';
import { ReactComponent as MinusIcon } from 'static/icons/minus.svg';
import { ReactComponent as PlusIcon } from 'static/icons/plus.svg';
import { ReactComponent as ClearIcon } from 'static/icons/clear.svg';

import styles from './CartItem.module.css';

type Props = {
  item: {
    name: string;
    photo: string;
    count: number;
    price: number;
    size: string;
    dough: string;
  };
};

const CartItem: FunctionComponent<Props> = (props) => {
  const { item } = props;

  const onDecrement = () => {};

  const onIncrement = () => {};

  const onRemove = () => {};

  return (
    <div className={styles.cartItem}>
      <div className={styles.pizzaInfo}>
        <img className={styles.pizzaPhoto} src={item.photo} alt={item.name} />
        <div>
          <h3 className={styles.pizzaName}>{item.name}</h3>
          <p className={styles.pizzaParams}>{`${item.dough}, ${item.size}`}</p>
        </div>
      </div>
      <div className={styles.countActions}>
        <IconButton onClick={onDecrement}>
          <MinusIcon />
        </IconButton>
        <div className={styles.pizzaCount}>{item.count}</div>
        <IconButton onClick={onIncrement}>
          <PlusIcon />
        </IconButton>
      </div>
      <div className={styles.pizzaPrice}>{`${item.price} ₽ `}</div>
      <IconButton onClick={onRemove} color="default">
        <ClearIcon />
      </IconButton>
    </div>
  );
};

export default CartItem;
