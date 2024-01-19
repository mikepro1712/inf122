import './App.css';
import Login from './components/Login'
import Perfil from './components/Perfil';
import Register from './components/Register';
import Navbar from './components/Navbar';
import { useRef } from 'react';
import { BrowserRouter as Router,Routes, Route }from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Navbar />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Perfil' element={<Perfil />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;