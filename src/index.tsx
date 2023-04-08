import React, { FC, useState, ReactNode } from 'react';
import { render } from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import characters from './frame-data/characters'

// const Header: ReactNode = (props): ReactNode => (
//   // <Routes>
//   //   <Route
//   //     render={() => {
//   //       // Show character name as header title.
//   //       return (
//   //         <header>
//   //           <h3>SSBM Frames</h3>
//   //           <h5>Characters</h5>
            
//   //           {
//   //             Object.keys(characters).map((character) => {
//   //               return (
//   //                 <div>{character}</div>
//   //               )
//   //             })
//   //           }
//   //         </header>
//   //       );
//   //     }}
//   //   />
//   // </Routes>
//   <>
//   </>
// );

const Home = () => {
// const Home: ReactNode = (): ReactNode => {
// function Home({ children }: Props): ReactNode {
// function Home(): ReactNode {
  return (
    <>
      Home page!
    </>
  );
};

const Character = () => {

  // props.character

  // useContext

  return (
    <div className="character-wrapper">
      <h1>Character page</h1>
      {/* <b>{props.character}</b> */}
    </div>
  );
};

const Application: FC = () => {

  // const myCharacter = useState('none')
  const myCharacter = useState('fox')

  return (

    <BrowserRouter>
      <Routes>
        {/* <Header /> */}
        <Route path="/" element={ <Home /> } />
        <Route path="/character/" element={<Character />}  /> {/* v6: must use useContext to pass vars */}
        {/* <Route element={Home} /> */}
      </Routes>
    </BrowserRouter>
  )

};

render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
