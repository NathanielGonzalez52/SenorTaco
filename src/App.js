import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import MenuHome from "./pages/MenuHome";
import Home from './pages/Home';


function App() {
  return (
    <div className="App">

    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/menuhome' element={<MenuHome/>}/>
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
