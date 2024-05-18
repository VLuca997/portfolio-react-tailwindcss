import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Work from './Components/Work';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
function App() {
    return (
        <div className="App flex flex-col ">
            <BrowserRouter>
            
            <div className=' fixed z-10'>
                <Navbar />
            </div>

            <div className=' pt-[150px] sm:pt-[0px] md:pt-[20px] lg:pt-[0px]'>
                <Routes>
                    <Route path='/pagina2' element={<SecondPage/>} />
                    <Route path='/pagina1' element={<FirstPage/>} />
                </Routes>
            </div>

            <div>
                <Footer/>
            </div>

            </BrowserRouter>

        </div>
    );
}

export default App;
