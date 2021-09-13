import { DocumentData } from 'firebase/firestore';
import { IPizzaCategory } from './IPizzaCategory';
import { BaseService } from '../Base.service';

export const COLLECTION_NAME = 'categories';

class PizzaCategoryService extends BaseService<IPizzaCategory> {
  // eslint-disable-next-line class-methods-use-this
  formatRawItem(rawData: DocumentData): IPizzaCategory {
    return <IPizzaCategory>rawData;
  }

  async getCategoriesList() {
    const allCategory: IPizzaCategory = {
      label: 'Все',
      value: 'all',
    };
    const categoriesData = await this.getData();

    return [allCategory, ...categoriesData];
  }
}

export const pizzaCategoryService = new PizzaCategoryService(COLLECTION_NAME);
