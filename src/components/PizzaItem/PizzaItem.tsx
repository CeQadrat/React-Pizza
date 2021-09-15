import React, { FunctionComponent, useState, useCallback } from 'react';
import { observer } from 'mobx-react';

import PizzaPropertiesSelect from 'components/PizzaPropertiesSelect';
import Button from 'components/Button';
import { IPizzaItem } from 'resources/PizzaItem';
import { IPizzaSize } from 'resources/PizzaSize';
import { IPizzaDough } from 'resources/PizzaDough';

import { ReactComponent as PlusIcon } from 'static/icons/plus.svg';

import styles from './PizzaItem.module.css';

type Props = {
  item: IPizzaItem;
  sizes: IPizzaSize[];
  doughs: IPizzaDough[];
  onAdd: (item: IPizzaItem, size: string, dough: string) => void;
  getItemsInCart: (pizzaName: string, size: string, dough: string) => number;
};

const PizzaItem: FunctionComponent<Props> = (props) => {
  const { item, sizes, doughs, onAdd, getItemsInCart } = props;
  const defaultDough = Object.keys(item.price)[0];
  const defaultSize = Object.keys(item.price?.[defaultDough])[0];
  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedDough, setSelectedDough] = useState(defaultDough);

  const itemsInCart = getItemsInCart(item.name, selectedSize, selectedDough);

  const handleClickAddButton = useCallback(() => {
    onAdd(item, selectedSize, selectedDough);
  }, [item, onAdd, selectedDough, selectedSize]);

  return (
    <div className={styles.item}>
      <img className={styles.photo} src={item.photo} alt={item.name} />
      <h3 className={styles.name}>{item.name}</h3>
      <PizzaPropertiesSelect
        doughs={doughs}
        selectedDough={selectedDough}
        onDoughChange={setSelectedDough}
        sizes={sizes}
        selectedSize={selectedSize}
        onSizeChange={setSelectedSize}
      />
      <div className={styles.actions}>
        <div className={styles.price}>
          {`от ${item.price?.[selectedDough]?.[selectedSize]} ₽`}
        </div>
        <Button startIcon={<PlusIcon />} onClick={handleClickAddButton}>
          Добавить
          {!!itemsInCart && (
            <span className={styles.itemsInCart}>{itemsInCart}</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default observer(PizzaItem);
