import React, { FunctionComponent, useState } from 'react';

import Tabs from 'components/Tabs';
import SortInput from 'components/SortInput';

import PizzaItem from 'components/PizzaItem';
import styles from './Main.page.module.css';

const tabs = [
  {
    label: 'Все',
    value: 'all',
  },
  {
    label: 'Мясные',
    value: 'meat',
  },
];

const sortItems = [
  {
    label: 'популярности',
    value: 'popular',
  },
  {
    label: 'цене',
    value: 'price',
  },
  {
    label: 'алфавиту',
    value: 'alphabet',
  },
];

const sizes = [
  {
    label: '26 см.',
    value: '26',
  },
  {
    label: '30 см.',
    value: '30',
  },
  {
    label: '40 см.',
    value: '40',
  },
];

const doughs = [
  {
    label: 'тонкое',
    value: 'thin',
  },
  {
    label: 'традиционное',
    value: 'traditional',
  },
];

const pizzas = [
  {
    name: 'name',
    photo:
      'https://firebasestorage.googleapis.com/v0/b/react-pizza-c5cf2.appspot.com/o/image%202.png?alt=media&token=36cd0613-47c8-468c-9036-950c363176f8',
    doughs: [],
    sizes: [],
    price: {
      traditional: {
        '26': 1000,
      },
    },
  },
  {
    name: 'name2',
    photo:
      'https://firebasestorage.googleapis.com/v0/b/react-pizza-c5cf2.appspot.com/o/image%202.png?alt=media&token=36cd0613-47c8-468c-9036-950c363176f8',
    doughs: [],
    sizes: [],
    price: {
      traditional: {
        '26': 1000,
      },
    },
  },
  {
    name: 'name3',
    photo:
      'https://firebasestorage.googleapis.com/v0/b/react-pizza-c5cf2.appspot.com/o/image%202.png?alt=media&token=36cd0613-47c8-468c-9036-950c363176f8',
    doughs: [],
    sizes: [],
    price: {
      traditional: {
        '26': 1000,
      },
    },
  },
];

const Main: FunctionComponent = () => {
  const [category, setCategory] = useState('all');
  const [sortItem, setSortItem] = useState(sortItems[0]);

  return (
    <div>
      <div className={styles.topbar}>
        <Tabs tabs={tabs} selectedTab={category} onChange={setCategory} />
        <SortInput
          items={sortItems}
          selectedItem={sortItem}
          onItemSelect={setSortItem}
        />
      </div>
      <div className={styles.title}>Все пиццы</div>
      <div className={styles.content}>
        {pizzas.map((pizza) => (
          <PizzaItem
            key={pizza.name}
            doughs={doughs}
            sizes={sizes}
            item={pizza}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
