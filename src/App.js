import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/cart" element={ <Cart /> } />
        </Routes>
    </div>
  );
}

export default App;
