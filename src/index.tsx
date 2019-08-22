import React, { FC } from 'react';
import { render } from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

const Header: FC = () => (
  <Switch>
    <Route
      render={() => {
        // XXX Show character name as header title.
        return (
          <header>
            <h3>SSBM Frames</h3>
          </header>
        );
      }}
    />
  </Switch>
);

const Page: FC = () => {
  return (
    <main>
      <h2>Melee frame data web-app built using React Hooks and Typescript</h2>
    </main>
  );
};

const Application: FC = () => (
  <Router>
    <Header />
    <Route component={Page} />
  </Router>
);

render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
