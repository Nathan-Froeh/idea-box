/* eslint-disable no-unused-vars */

import './App.scss';
import {Context} from './Store/Store';
import {TopNav} from './topNav/topNav';
import {SideNav} from './sideNav/sideNav';
import React, { useContext } from 'react';
import { Card } from './card/card';

function App() {
  const {state, dispatch} = useContext(Context);

  return (
      <div className="App">
        <TopNav></TopNav>

        <div className='main-container'>
          <SideNav></SideNav>

          <main>
            {
              state.ideas.map((idea, i) => {
              return <Card card={idea} key={i}></Card>})
            }
          </main>
        </div>
      </div>
  );
}

export default App;
