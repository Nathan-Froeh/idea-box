/* eslint-disable no-unused-vars */

import './App.scss';
import {Store, Context} from './Store/Store';
import {TopNav} from './topNav/topNav';
import {SideNav} from './sideNav/sideNav';
import React, { useContext } from 'react';
import { Card } from './card/card';

function App() {
  const [state, dispatch] = useContext(Context);

  return (
    <Store>
      <div className="App">
        <TopNav></TopNav>

        <div className='main-container'>
          <SideNav></SideNav>

          <main>
            
            {
              state.ideas.map(idea => <Card card={idea}></Card>)
            }
          </main>
        </div>
      </div>
    </Store>
  );
}

export default App;
