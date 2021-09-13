import {
  Firestore,
  query,
  where,
  orderBy,
  collection,
  getDocs,
  DocumentData,
  WhereFilterOp,
  OrderByDirection,
} from 'firebase/firestore';

import { db } from 'resources/firebase';

export type QueryParams<T> = Array<[string, WhereFilterOp, T[keyof T]]>;

export type OrderParams = Record<string, OrderByDirection>;

export abstract class BaseService<Item extends DocumentData> {
  collectionName: string;

  db: Firestore;

  constructor(collectionName: string) {
    this.collectionName = collectionName;
    this.db = db;
  }

  abstract formatRawItem(rawItem: DocumentData): Item;

  private buildQueryFromParams(
    queryParams: QueryParams<Item>,
    orderParams: OrderParams
  ) {
    const whereQueries = queryParams.map(([key, operator, value]) =>
      where(key, operator, value)
    );
    const orderQueries = Object.entries(orderParams).map(([key, value]) =>
      orderBy(key, value)
    );

    return query(
      collection(db, this.collectionName),
      ...whereQueries,
      ...orderQueries
    );
  }

  async getData(
    queryParams: QueryParams<Item> = [],
    orderParams: OrderParams = {}
  ): Promise<Item[]> {
    const dataQuery = this.buildQueryFromParams(queryParams, orderParams);
    const querySnapshot = await getDocs(dataQuery);
    return querySnapshot.docs.map((doc) => this.formatRawItem(doc.data()));
  }
}
