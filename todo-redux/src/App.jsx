import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Todo } from './Components/Todo';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/todo' element={<Todo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
