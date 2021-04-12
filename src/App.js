
import './App.scss';
import {TopNav} from './topNav/topNav';
import {SideNav} from './sideNav/sideNav';

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>

      <div className='main-container'>
        <SideNav></SideNav>

        <main>

        </main>
      </div>
    </div>
  );
}

export default App;
