import './App.css';
import { UserAddress } from './States/UserAddress';
import { UserDetails } from './States/UserDetails';


function App() {
  return (
    <div className="App">
      <UserDetails />
      <UserAddress />
    </div>
  );
}

export default App;
