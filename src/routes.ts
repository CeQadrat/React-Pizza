export enum Layouts {
  MAIN = 'main',
}

export type Route = {
  name: string;
  path: string;
  layout: Layouts;
  title: string;
  subtitle: string;
};

export const Routes: { [id: string]: Route } = {
  main: {
    name: 'main',
    path: '/',
    layout: Layouts.MAIN,
    title: 'React Pizza',
    subtitle: 'самая вкусная пицца во вселенной',
  },
  cart: {
    name: 'cart',
    path: '/cart',
    layout: Layouts.MAIN,
    title: 'React Pizza',
    subtitle: 'Самая реактивная пицца',
  },
};
