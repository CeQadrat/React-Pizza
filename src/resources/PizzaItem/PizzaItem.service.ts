import { DocumentData } from 'firebase/firestore';
import { IPizzaItem } from './IPizzaItem';
import { BaseService, OrderParams } from '../Base.service';

export const COLLECTION_NAME = 'pizza';

class PizzaItemService extends BaseService<IPizzaItem> {
  // eslint-disable-next-line class-methods-use-this
  formatRawItem(rawData: DocumentData): IPizzaItem {
    return <IPizzaItem>rawData;
  }

  getPizzaList(orderParams: OrderParams, category = 'all') {
    if (category === 'all') {
      return this.getData([], orderParams);
    }

    return this.getData(
      [['categories', 'array-contains', category]],
      orderParams
    );
  }
}

export const pizzaItemService = new PizzaItemService(COLLECTION_NAME);
