import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

export function App() {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - Phone Logs" defaultTitle="Listing">
        <meta name="description" content="on-off-technical-test" />
      </Helmet>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
