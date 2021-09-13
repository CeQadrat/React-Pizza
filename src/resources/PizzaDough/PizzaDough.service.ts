import { DocumentData } from 'firebase/firestore';
import { IPizzaDough } from './IPizzaDough';
import { BaseService } from '../Base.service';

export const COLLECTION_NAME = 'doughs';

class PizzaDoughService extends BaseService<IPizzaDough> {
  // eslint-disable-next-line class-methods-use-this
  formatRawItem(rawData: DocumentData): IPizzaDough {
    return <IPizzaDough>rawData;
  }
}

export const pizzaDoughService = new PizzaDoughService(COLLECTION_NAME);
