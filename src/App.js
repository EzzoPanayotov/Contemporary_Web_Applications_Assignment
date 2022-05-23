import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Register from './Pages/Register';
import Home from './Pages/Home';
function App() {
  return (
    <>
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
