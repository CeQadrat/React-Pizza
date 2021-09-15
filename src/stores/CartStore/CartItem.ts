import { observable, computed, action, makeObservable } from 'mobx';

import { IPizzaItem } from 'resources/PizzaItem';
import { IPizzaSize } from 'resources/PizzaSize';
import { IPizzaDough } from 'resources/PizzaDough';
import { ICartStore } from './ICartStore';
import { ICartItem } from './ICartItem';

export class CartItem implements ICartItem {
  private cartStore: ICartStore;

  name: string;

  photo: string;

  count = 1;

  size: IPizzaSize;

  dough: IPizzaDough;

  pizzaItem: IPizzaItem;

  constructor(
    cartStore: ICartStore,
    pizzaItem: IPizzaItem,
    size: IPizzaSize,
    dough: IPizzaDough
  ) {
    this.cartStore = cartStore;
    this.name = pizzaItem.name;
    this.photo = pizzaItem.photo;
    this.size = size;
    this.dough = dough;
    this.pizzaItem = pizzaItem;

    makeObservable(this, {
      name: observable,
      photo: observable,
      count: observable,
      size: observable,
      dough: observable,
      pizzaItem: observable,
      price: computed,
      incrementCount: action,
      decrimentCount: action,
      remove: action,
    });
  }

  get price(): number {
    return this.pizzaItem.price?.[this.dough.value]?.[this.size.value] || 0;
  }

  incrementCount(): void {
    this.count += 1;
  }

  decrimentCount(): void {
    if (this.count <= 1) {
      this.cartStore.removeItem(this);
      return;
    }

    this.count -= 1;
  }

  remove(): void {
    this.cartStore.removeItem(this);
  }
}
