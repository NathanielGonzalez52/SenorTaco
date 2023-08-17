import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import HeroSection from './components/HeroSection';
import StoreInfo from './components/StoreInfo';
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import Menu from "./pages/Menu";



function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/menu' element={<Menu/>}/>
</Routes>
      </Router>
      <HeroSection />
      <StoreInfo />
      <About />
      
    </div>
  );
}

export default App;
