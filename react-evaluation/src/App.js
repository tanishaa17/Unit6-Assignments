import { Route, Routes } from 'react-router-dom';
import './App.css';
import { City } from './Components/City';
import { Country } from './Components/Country';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/add-city' element={<City />}></Route>
        <Route exact path='/add-country' element={<Country />}></Route>
      </Routes>
    </div>
  );
}

export default App;
