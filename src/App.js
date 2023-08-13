import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import HeroSection from './components/HeroSection';
import StoreInfo from './components/StoreInfo';
import About from "./components/About";


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <StoreInfo />
      <About />
      
    </div>
  );
}

export default App;
