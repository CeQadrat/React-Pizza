import { CartStore } from './CartStore';
import { ICartStore } from './CartStore/ICartStore';
import { IRootStore } from './IRootStore';

export class RootStore implements IRootStore {
  cartStore: ICartStore;

  constructor() {
    this.cartStore = new CartStore(this);
  }
}
