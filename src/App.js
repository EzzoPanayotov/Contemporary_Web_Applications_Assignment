import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import { AuthProvider } from './Contexts/AuthContext';
import Login from './Pages/Login';
import PrivateRoute from './Components/PrivateRoute';
function App() {
  return (
    <>
    <Router>
      <div>
          <AuthProvider>
            <NavBar/>
            <Routes>
              <Route exact path='/' element={<PrivateRoute Component={Home}/>}/>
              <Route path='/Register' element={<Register/>}/>
              <Route path='/Login' element={<Login/>}/>
            </Routes>
            <Footer/>
          </AuthProvider>
      </div>
    </Router>
    </>
  );
}

export default App;
