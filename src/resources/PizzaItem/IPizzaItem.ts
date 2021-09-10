export interface IPizzaItem {
  name: string;
  photo: string;
  doughs: string[];
  sizes: string[];
  price: Record<string, Record<string, number>>;
}
