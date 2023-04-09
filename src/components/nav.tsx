/**
 * nav.tsx
 * 
 * Contains the main navigation component which is always displayed at the top
 * of the screen.
 */

import React, { FC, useState, ReactNode } from 'react';
import { render } from 'react-dom';

const Nav = () => {
  return (
    <div className="nav-wrapper">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/characters">Characters</a></li>
          <li><a href="/characters/fox">Fox</a></li>
          <li><a href="/characters/marth">Marth</a></li>
        </ul> 
    </div>
  );
};

export default Nav