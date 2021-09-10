import React, { FunctionComponent } from 'react';

import Tabs from 'components/Tabs';

import styles from './PizzaPropertiesSelect.module.css';

type Props = {
  sizes: Array<{ label: string; value: string }>;
  selectedSize: string;
  onSizeChange: (value: string) => void;
  doughs: Array<{ label: string; value: string }>;
  selectedDough: string;
  onDoughChange: (value: string) => void;
};

const PizzaPropertiesSelect: FunctionComponent<Props> = (props) => {
  const {
    sizes,
    selectedSize,
    onSizeChange,
    doughs,
    selectedDough,
    onDoughChange,
  } = props;

  return (
    <div className={styles.container}>
      <Tabs
        classes={{
          root: styles.tabs,
          tab: styles.tab,
          indicator: styles.tab__indicator,
          selected: styles.tab__selected,
        }}
        tabs={doughs}
        selectedTab={selectedDough}
        onChange={onDoughChange}
      />
      <Tabs
        classes={{
          root: styles.tabs,
          tab: styles.tab,
          indicator: styles.tab__indicator,
          selected: styles.tab__selected,
        }}
        tabs={sizes}
        selectedTab={selectedSize}
        onChange={onSizeChange}
      />
    </div>
  );
};

export default PizzaPropertiesSelect;
