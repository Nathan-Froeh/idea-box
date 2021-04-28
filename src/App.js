
import './App.scss';
import {Store} from './Store/Store'
import {TopNav} from './topNav/topNav';
import {SideNav} from './sideNav/sideNav';

function App() {
  return (
    <Store>
      <div className="App">
        <TopNav></TopNav>

        <div className='main-container'>
          <SideNav></SideNav>

          <main>

          </main>
        </div>
      </div>
    </Store>
  );
}

export default App;
