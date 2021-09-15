import { observable, computed, action, makeObservable } from 'mobx';
import { IPizzaDough } from 'resources/PizzaDough';
import { IPizzaItem } from 'resources/PizzaItem';
import { IPizzaSize } from 'resources/PizzaSize';

import { IRootStore } from '../IRootStore';
import { CartItem } from './CartItem';
import { ICartStore } from './ICartStore';

export class CartStore implements ICartStore {
  private rootStore: IRootStore;

  items: CartItem[] = [];

  constructor(rootStore: IRootStore) {
    this.rootStore = rootStore;

    makeObservable(this, {
      items: observable,
      totalCount: computed,
      totalPrice: computed,
      addItem: action,
      removeItem: action,
      clearCart: action,
    });
  }

  get totalCount(): number {
    return this.items.reduce((sum, item) => sum + item.count, 0);
  }

  get totalPrice(): number {
    return this.items.reduce((sum, item) => sum + item.count * item.price, 0);
  }

  addItem(pizzaItem: IPizzaItem, size: IPizzaSize, dough: IPizzaDough): void {
    const existingItem = this.items.find(
      (item) =>
        item.pizzaItem.name === pizzaItem.name &&
        item.size.value === size.value &&
        item.dough.value === dough.value
    );

    if (existingItem) {
      existingItem.incrementCount();
      return;
    }
    this.items.push(new CartItem(this, pizzaItem, size, dough));
  }

  removeItem(itemToRemove: CartItem): void {
    const newItems = this.items.filter((item) => item !== itemToRemove);
    this.items = newItems;
  }

  getItemsInCart(pizzaName: string, size: string, dough: string): number {
    return (
      this.items.find(
        (item) =>
          item.pizzaItem.name === pizzaName &&
          item.size.value === size &&
          item.dough.value === dough
      )?.count || 0
    );
  }

  clearCart(): void {
    this.items = [];
  }
}
