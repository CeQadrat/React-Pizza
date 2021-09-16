import React, { FunctionComponent } from 'react';

import DropdownMenu from 'components/DropdownMenu';

import { ReactComponent as ArrowIcon } from 'static/icons/arrow.svg';

import styles from './SortInput.module.css';

export type SortItem = {
  label: string;
  value: string;
  orderDir?: 'asc' | 'desc';
};

type Props = {
  selectedItem: SortItem;
  items: SortItem[];
  onItemSelect: (value: SortItem) => void;
};

const SortInput: FunctionComponent<Props> = (props) => {
  const { selectedItem, items, onItemSelect } = props;

  return (
    <div className={styles.sort}>
      <ArrowIcon className={styles.arrow} />
      <span className={styles.label}>{'Сортировка по: '}</span>
      <DropdownMenu items={items} onItemSelect={onItemSelect}>
        <span className={styles.sortItem}>{selectedItem.label}</span>
      </DropdownMenu>
    </div>
  );
};

export default SortInput;
