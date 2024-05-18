import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Work from './Components/Work';


function App() {
  return (
    <div className="App  ">
       <Navbar/>
       <Hero />
       <About />
       <Work/>
       <Experience/>
       <Contact/>
       <Footer />
    </div>
  );
}

export default App;
