import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '../App.css';
import { NavLink } from 'react-router-dom';
import SecondPage from '../pages/SecondPage';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const sectionsRef = useRef({});//riceviamo le referenze

    const handleNav = () => {
        //mobile
        setNav(!nav);
    };

    const handleClick = (event, targetId) => {//passiamo l'eventoClick e il targetId che selezioneremo
        event.preventDefault();//preveniamo gli effetti predefiniti del link
        const targetSection = sectionsRef.current[targetId];//riceviamo l'href dal dom

        if (targetSection) {
            //La sezione che avrà come id selezionato, padding:100px 0 0 0;
            targetSection.style.paddingTop = '100px';

            // Applica lo scroll, e scegliamo smooth per rendere il movimetno piu piacevole, ( lo leviamo da App.css * html{})
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Cse clicchiamo sul menu in modalità mobile, chiuderà il menu
            setNav(false);
        }
    };

    useEffect(() => {
        // sectionsRef referenze per ID 
        sectionsRef.current = {
            Home: document.getElementById('Home'),
            About: document.getElementById('About'),
            Work: document.getElementById('Work'),
            Experience: document.getElementById('Experience'),
            Contact: document.getElementById('Contact'),
        };
    }, []);

    return (
        <div className='top-0 min-w-[100%] bg-[#232325]/90 border-b border-1 border-b-gray-700 fixed z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto text-l px-4 h-24'>
            <h1 className='text-3xl font-bold primary-color ml-4'>LucaDEV</h1>
            <ul className='hidden md:flex '>
                <li className='  py-2 px-2 hover:border-white hover:rounded-3xl border border-transparent hover:bg-white '>
                    <a href="#Home" className="nav-link" onClick={(e) => handleClick(e, 'Home')}>HOME</a>
                </li>
                <li className='  py-2 px-2 hover:border-white hover:rounded-3xl border border-transparent hover:bg-white '>
                    <a href="#About" className="nav-link" onClick={(e) => handleClick(e, 'About')}>ABOUT ME</a>
                </li>
                <li className='  py-2 px-2 hover:border-white hover:rounded-3xl border border-transparent hover:bg-white '>
                    <a href="#Work" className="nav-link" onClick={(e) => handleClick(e, 'Work')}>I MIEI LAVORI</a>
                </li>
                <li className='  py-2 px-2 hover:border-white hover:rounded-3xl border border-transparent hover:bg-white '>
                    <a href="#Experience" className="nav-link" onClick={(e) => handleClick(e, 'Experience')}>ESPERIENZE</a>
                </li>
                <li className='  py-2 px-2 hover:border-white hover:rounded-3xl border border-transparent hover:bg-white '>
                    <a href="#Contact" className="nav-link" onClick={(e) => handleClick(e, 'Contact')}>LAVORA CON ME</a>
                </li>
                <li>
                    <NavLink to='/pagina2'>Pagina2</NavLink>
                </li>
                <li>
                    <NavLink to='/pagina1'>Pagina1</NavLink>
                </li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            <div className={nav ? 'text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : "fixed left-[-100%]"}>
                <h1 className='text-3xl primary-color m-4'>LucaDEV</h1>
                <ul className='text-lg p-8'>
                    <li className='py-5'>
                        <a href="#Home" className="nav-link" onClick={(e) => handleClick(e, 'Home')}>HOME</a>
                    </li>
                    <li className='py-5'>
                        <a href="#About" className="nav-link" onClick={(e) => handleClick(e, 'About')}>ABOUT ME</a>
                    </li>
                    <li className='py-5'>
                        <a href="#Work" className="nav-link" onClick={(e) => handleClick(e, 'Work')}>I MIEI LAVORI</a>
                    </li>
                    <li className='py-5'>
                        <a href="#Experience" className="nav-link" onClick={(e) => handleClick(e, 'Experience')}>ESPERIENZE</a>
                    </li>
                    <li className='py-5'>
                        <a href="#Contact" className="nav-link" onClick={(e) => handleClick(e, 'Contact')}>LAVORA CON ME</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
