import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { observer } from 'mobx-react';

import Tabs from 'components/Tabs';
import SortInput, { SortItem } from 'components/SortInput';
import PizzaItem from 'components/PizzaItem';
import { IPizzaItem, pizzaItemService } from 'resources/PizzaItem';
import { IPizzaCategory, pizzaCategoryService } from 'resources/PizzaCategory';
import { IPizzaDough, pizzaDoughService } from 'resources/PizzaDough';
import { IPizzaSize, pizzaSizeService } from 'resources/PizzaSize';
import { useStore } from 'contexts/StoreContext';

import styles from './Main.page.module.css';

const sortItems: SortItem[] = [
  {
    label: 'популярности',
    value: 'popularity',
    orderDir: 'desc',
  },
  {
    label: 'цене',
    value: 'price.traditional.30',
    orderDir: 'desc',
  },
  {
    label: 'алфавиту',
    value: 'name',
    orderDir: 'asc',
  },
];

const Main: FunctionComponent = observer(() => {
  const { cartStore } = useStore();

  const [category, setCategory] = useState<string>();
  const [sortItem, setSortItem] = useState(sortItems[0]);
  const [isLoading, setIsLoading] = useState(true);

  const [pizzaList, setPizzaList] = useState<IPizzaItem[]>([]);
  const [categoriesList, setCategoriesList] = useState<IPizzaCategory[]>([]);
  const [doughsList, setDoughsList] = useState<IPizzaDough[]>([]);
  const [sizesList, setSizesList] = useState<IPizzaSize[]>([]);

  const loadPizzaList = async () => {
    const pizzaData = await pizzaItemService.getPizzaList({
      [sortItems[0].value]: sortItems[0].orderDir || 'desc',
    });
    setPizzaList(pizzaData);
  };

  const loadCategoriesList = async () => {
    const categoriesData = await pizzaCategoryService.getCategoriesList();
    setCategory(categoriesData[0].value);
    setCategoriesList(categoriesData);
  };

  const loadDoughsList = async () => {
    const doughsData = await pizzaDoughService.getData();
    setDoughsList(doughsData);
  };

  const loadSizesList = async () => {
    const sizesData = await pizzaSizeService.getData();
    setSizesList(sizesData);
  };

  const loadInitialData = useCallback(async () => {
    await Promise.all([
      loadPizzaList(),
      loadCategoriesList(),
      loadDoughsList(),
      loadSizesList(),
    ]);
  }, []);

  useEffect(() => {
    const updatePizzaList = async () => {
      const pizzaData = await pizzaItemService.getPizzaList(
        {
          [sortItem.value]: sortItem.orderDir || 'desc',
        },
        category
      );
      setPizzaList(pizzaData);
    };

    updatePizzaList();
  }, [category, sortItem]);

  useEffect(() => {
    setIsLoading(true);
    try {
      loadInitialData();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [loadInitialData]);

  const handleAddPizzaToCart = useCallback(
    (pizzaItem: IPizzaItem, sizeValue: string, doughValue: string) => {
      const size = sizesList.find((s) => s.value === sizeValue);
      const dough = doughsList.find((s) => s.value === doughValue);

      if (size && dough) {
        cartStore.addItem(pizzaItem, size, dough);
      }
    },
    [cartStore, doughsList, sizesList]
  );

  const getItemsInCart = useCallback(
    (pizzaName: string, size: string, dough: string): number => {
      return cartStore.getItemsInCart(pizzaName, size, dough);
    },
    [cartStore]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.mainPage}>
      <div className={styles.topbar}>
        <Tabs
          tabs={categoriesList}
          selectedTab={category}
          onChange={setCategory}
        />
        <SortInput
          items={sortItems}
          selectedItem={sortItem}
          onItemSelect={setSortItem}
        />
      </div>
      <div className={styles.title}>Все пиццы</div>
      <div className={styles.content}>
        {pizzaList.map((pizza) => (
          <PizzaItem
            key={pizza.name}
            doughs={doughsList}
            sizes={sizesList}
            item={pizza}
            onAdd={handleAddPizzaToCart}
            getItemsInCart={getItemsInCart}
          />
        ))}
      </div>
    </div>
  );
});

export default Main;
