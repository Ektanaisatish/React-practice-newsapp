
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Counter from './Appp.js';
import ClickCount from './components/ClickCount.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar /> 
        <Counter/>
        <ClickCount />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
    //checking git
  );
}
export default App;
