
import './App.css';
import { Dashboard } from './Components/Dashboard';
import { NavBar } from './Components/NavBar';
import { Routes,Route } from 'react-router-dom';
import { CustomComponents } from './Components/CustomComponents';
import { Utilities } from './Components/Utilities';
import {Charts} from './Components/Charts';
import { Tables } from './Components/Tables';

function App() {
  return (
    <div id="wrapper">
       <NavBar/>
       <Routes>
  <Route path="/" element={<Dashboard />}/>
  <Route path="/components" element={<CustomComponents/>}/>
  <Route path="/utilities" element={<Utilities/>}/>
  <Route path="/charts" element={<Charts/>}/>
  <Route path="/tables" element={<Tables/>}/>
</Routes>
    </div>
  );
}

export default App;
