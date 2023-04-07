import React, { FC, useState } from 'react';
import { render } from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import characters from './frame-data/characters'

const Header: FC = () => (
  <Switch>
    <Route
      render={() => {
        // Show character name as header title.
        return (
          <header>
            <h3>SSBM Frames</h3>
            <h5>Characters</h5>
            
            {
              Object.keys(characters).map((character) => {
                return (
                  <div>{character}</div>
                )
              })
            }
          </header>
        );
      }}
    />
  </Switch>
);

const Home: FC = () => {
  return (
    <>
    </>
  );
};

const Character = (props) => {

  // props.character

  return (
    <div className="character-wrapper">
      <h1>Character page</h1>
      <b>{props.character}</b>
    </div>
  );
};

const Application: FC = () => {

  // const myCharacter = useState('none')
  const myCharacter = useState('fox')

  return (

    <Router>
      <Header />
      <Route component={Home} />
      <Route component={Character} character={myCharacter} />
      <Route component={Home} />
    </Router>
  )

};

render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
