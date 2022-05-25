import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';
import HomeNoLogin from './Pages/HomeNoLogin';
import Footer from './Components/Footer';
import { AuthProvider } from './Contexts/AuthContext';
import Login from './Pages/Login';
import PrivateRoute from './Components/PrivateRoute';
import NavBar from './Components/NavBar';
import HomePageLoggedIn from './Pages/HomePageLoggedIn';
import ForgotPassword from './Components/ForgotPassword';
import ProfileImage from './Components/ProfileImage';

function App() {
  return (
    <>
    <Router>
      <div>
          <AuthProvider>
            <NavBar/>
            <Routes>
              <Route exact path='/' element={<PrivateRoute Component={HomePageLoggedIn}/>}/>
              <Route path='/profile' element={<ProfileImage/>}/>
              <Route path='/no-user' element={<HomeNoLogin/>}/>
              <Route path='/forgot-password' element={<ForgotPassword/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
            <Footer/>
          </AuthProvider>
      </div>
    </Router>
    </>
  );
}

export default App;
