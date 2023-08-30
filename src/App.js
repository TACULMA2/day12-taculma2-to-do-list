import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <nav>
          <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/done'}>Done List</NavLink></li>
            <li> <NavLink to={'/help'}>Help</NavLink></li>
          </ul>
        </nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;