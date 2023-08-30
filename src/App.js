import { Outlet } from 'react-router-dom';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <nav>
          <ul>
            <li><a href={'/'}>Home</a></li>
            <li><a href={'/done'}>Done List</a></li>
            <li> <a href={'/help'}>Help</a></li>
          </ul>
        </nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;