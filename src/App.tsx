import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import { Layouts, Routes } from 'routes';
import { MainLayout } from 'layouts';
import { Main, Cart, NotFound } from 'pages';
import { StoreProvider } from 'contexts/StoreContext';

import './App.css';

const LayoutToComponent = {
  [Layouts.MAIN]: MainLayout,
};

const RouteComponents = {
  [Routes.main.name]: Main,
  [Routes.cart.name]: Cart,
};

const App: FunctionComponent = () => {
  return (
    <StoreProvider>
      <Router>
        <StylesProvider injectFirst>
          <Switch>
            {Object.values(Routes).map((route) => {
              const LayoutComponent = LayoutToComponent[route.layout];
              const RouteComponent = RouteComponents[route.name];

              return (
                <Route key={route.name} path={route.path} exact>
                  <LayoutComponent route={route}>
                    <RouteComponent />
                  </LayoutComponent>
                </Route>
              );
            })}
            <Route path="*" component={NotFound} />
          </Switch>
        </StylesProvider>
      </Router>
    </StoreProvider>
  );
};

export default App;
