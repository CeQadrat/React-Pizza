export interface IPizzaItem {
  name: string;
  photo: string;
  price: Record<string, Record<string, number>>;
  popularity: number;
  categories: string[];
}
