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
import Profile from './Pages/Profile';
import PrivateRouteLoggedIn from './Components/PrivateRouteLoggedIn';
import AskAQuestion from './Pages/AskAQuestion';
import YourQuestionsComponent from './Components/YourQuestionsComponent';

function App() {
  return (
    <>
    <Router>
      <div>
          <AuthProvider>
            <NavBar/>
            <Routes>
              <Route exact path='/' element={<PrivateRoute Component={HomePageLoggedIn}/>}/>
              <Route path='/ask-a-question' element={<PrivateRoute Component={AskAQuestion}/>}/>
              <Route path='/your-questions' element={<PrivateRoute Component={YourQuestionsComponent}/>}/>
              <Route path='/profile' element={<PrivateRoute Component={Profile}/>}/>
              <Route path='/no-user' element={<HomeNoLogin/>}/>
              <Route path='/forgot-password' element={<PrivateRouteLoggedIn Component={ForgotPassword}/>}/>
              <Route path='/register' element={<PrivateRouteLoggedIn Component={Register}/>}/>
              <Route path='/login' element={<PrivateRouteLoggedIn Component={Login}/>}/>
            </Routes>
            <Footer/>
          </AuthProvider>
      </div>
    </Router>
    </>
  );
}

export default App;
