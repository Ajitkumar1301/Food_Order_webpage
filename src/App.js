import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Carts from './components/Carts';
import Foods from './components/Foods';
import Category from './components/Category';

function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Carts/>
    <Foods/>
    
    <Category/>
          </div>
  );
}

export default App;
