import { IPizzaDough } from 'resources/PizzaDough';
import { IPizzaItem } from 'resources/PizzaItem';
import { IPizzaSize } from 'resources/PizzaSize';

export interface ICartItem {
  name: string;
  photo: string;
  count: number;
  price: number;
  size: IPizzaSize;
  dough: IPizzaDough;
  pizzaItem: IPizzaItem;

  incrementCount(): void;
  decrimentCount(): void;
  remove(): void;
}
