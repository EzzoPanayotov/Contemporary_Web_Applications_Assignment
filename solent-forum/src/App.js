import './App.css';
import Footer from './Components/Footer';
import MainContent from './Components/MainContent';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
function App() {
  return (
    <div className="App">
      <MainContent></MainContent>
      <NavBar></NavBar>
      <SideBar></SideBar>
      <Footer></Footer>
    </div>
  );
}

export default App;
