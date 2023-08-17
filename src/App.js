import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import HeroSection from './components/HeroSection';
import StoreInfo from './components/StoreInfo';
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';
import MenuHome from "./pages/MenuHome";
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/menuhome' element={<MenuHome/>}/>
</Routes>
      </Router>

      {/* <HeroSection />
      <StoreInfo />
      <About /> */}
      
    </div>
  );
}

export default App;
