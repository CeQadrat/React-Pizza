import React, { FunctionComponent } from 'react';
import { observer } from 'mobx-react';

import IconButton from 'components/IconButton';
import { ReactComponent as MinusIcon } from 'static/icons/minus.svg';
import { ReactComponent as PlusIcon } from 'static/icons/plus.svg';
import { ReactComponent as ClearIcon } from 'static/icons/clear.svg';
import { ICartItem } from 'stores/CartStore/ICartItem';

import styles from './CartItem.module.css';

type Props = {
  item: ICartItem;
};

const CartItem: FunctionComponent<Props> = (props) => {
  const { item } = props;

  const onDecrement = () => {
    item.decrimentCount();
  };

  const onIncrement = () => {
    item.incrementCount();
  };

  const onRemove = () => {
    item.remove();
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.pizzaInfo}>
        <img className={styles.pizzaPhoto} src={item.photo} alt={item.name} />
        <div>
          <h3 className={styles.pizzaName}>{item.name}</h3>
          <p
            className={styles.pizzaParams}
          >{`${item.dough.label}, ${item.size.label}`}</p>
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

export default observer(CartItem);
