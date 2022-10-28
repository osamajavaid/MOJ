import './App.css';
// import backgroundColor
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home'
import Project from './pages/Project';
function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <Home/>
        <Project/>
        <Footer></Footer>
    </div>
  );
}

export default App;
