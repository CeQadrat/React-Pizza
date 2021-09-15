import { IPizzaDough } from 'resources/PizzaDough';
import { IPizzaItem } from 'resources/PizzaItem';
import { IPizzaSize } from 'resources/PizzaSize';
import { ICartItem } from './ICartItem';

export interface ICartStore {
  items: ICartItem[];
  totalCount: number;
  totalPrice: number;

  addItem(pizzaItem: IPizzaItem, size: IPizzaSize, dough: IPizzaDough): void;
  removeItem(itemToRemove: ICartItem): void;
  getItemsInCart(pizzaName: string, size: string, dough: string): number;
  clearCart(): void;
}
