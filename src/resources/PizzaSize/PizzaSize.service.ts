import { DocumentData } from 'firebase/firestore';
import { IPizzaSize } from './IPizzaSize';
import { BaseService } from '../Base.service';

export const COLLECTION_NAME = 'sizes';

class PizzaSizeService extends BaseService<IPizzaSize> {
  // eslint-disable-next-line class-methods-use-this
  formatRawItem(rawData: DocumentData): IPizzaSize {
    return <IPizzaSize>rawData;
  }
}

export const pizzaSizeService = new PizzaSizeService(COLLECTION_NAME);
