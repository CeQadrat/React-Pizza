import React, { FunctionComponent } from 'react';

import Tabs from 'components/Tabs';
import { IPizzaSize } from 'resources/PizzaSize';
import { IPizzaDough } from 'resources/PizzaDough';
import { IPizzaItem } from 'resources/PizzaItem';

import styles from './PizzaPropertiesSelect.module.css';

type Props = {
  sizes: IPizzaSize[];
  selectedSize: string;
  onSizeChange: (value: string) => void;
  doughs: IPizzaDough[];
  selectedDough: string;
  onDoughChange: (value: string) => void;
  item: IPizzaItem;
};

const PizzaPropertiesSelect: FunctionComponent<Props> = (props) => {
  const {
    sizes,
    selectedSize,
    onSizeChange,
    doughs,
    selectedDough,
    onDoughChange,
    item,
  } = props;

  const doughsTabs = doughs.map((dough) => ({
    label: dough.label,
    value: dough.value,
    disabled: !item.price[dough.value],
  }));

  const sizesTabs = sizes.map((size) => ({
    label: size.label,
    value: size.value,
    disabled: !item.price?.[selectedDough]?.[size.value],
  }));

  return (
    <div className={styles.container}>
      <Tabs
        classes={{
          root: styles.tabs,
          tab: styles.tab,
          indicator: styles.tabIndicator,
          selected: styles.tabSelected,
        }}
        tabs={doughsTabs}
        selectedTab={selectedDough}
        onChange={onDoughChange}
      />
      <Tabs
        classes={{
          root: styles.tabs,
          tab: styles.tab,
          indicator: styles.tabIndicator,
          selected: styles.tabSelected,
        }}
        tabs={sizesTabs}
        selectedTab={selectedSize}
        onChange={onSizeChange}
      />
    </div>
  );
};

export default PizzaPropertiesSelect;
