import './App.css';
// import backgroundColor
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home'
import Project from './pages/Project';
import Services from './pages/Services';
function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Home/>
        <Services/>
        <Project/>
        <Footer></Footer>
    </div>
  );
}

export default App;
