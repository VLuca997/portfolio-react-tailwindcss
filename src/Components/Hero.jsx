import React from 'react'
import profilepic from '../assets/profilepic5.png'

import { AiFillLinkedin,AiFillGithub,AiFillInstagram } from 'react-icons/ai'
import { TypeAnimation }from 'react-type-animation'
export default function Hero() {
  return (
    <div id='Home' className='py-10 mt-[50px]'>

            <div className='max-w-[1200px] h-[80vh] mx-auto flex
                             flex-col-reverse sm:flex-row justify-center align-center'>

                <div className=' p-3  flex-col my-auto mx-auto  flex'>
                    <p className='md:text-5xl xm:text-4xl text-xl font-bold text-gray-200'>Benvenuti nel mio Portfolio!</p>
                   <h1 className=' md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                        <TypeAnimation
                            sequence={[
                                "Front-End Dev", 1000,
                                "Full-Stack Dev",1000,
                                "Back-end Dev",1000
                            ]}
                            wrapper="span"
                            repeat={Infinity} />
                    </h1>
                    <div className='inline-flex justify-center items-center'>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-500'>
                            React, Node, Laravel, Ruby on Rails e molto altro....
                        </p>
                    </div>
                    <div className='text-5xl flex justify-center lg:justify-start sm:justify-start  gap-16 my-7 text-purple-600'>
                           <AiFillLinkedin />
                           <AiFillGithub />
                           <AiFillInstagram />
                    </div>

                    <div className='flex justify-center lg:justify-start sm:justify-start '>
                    <div className='relative justify-center max-w-max flex group mb-10'>
                        <div className='absolute transition-all duration-1000 
                        opacity-70 -inset-px bg-gradient-to-r from-[#44bcff] via-[#ff44ec] to-[#ff675e] rounded-xl blur-lg group-hover:opacity-100 
                        group-hover:-inset-1 group-hover:duration-200 animate-tilt'>
                            
                        </div>
                        <a className=' relative inline-flex items-center  justify-center px-8 py-4 text-lg font-bold text-white transition-all 
                                    duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900' 
                            title="Download CV" role="button" href="7">
                            Scarica il mio CV
                        </a>
                        
                    </div>
                    </div>

                </div>
             
                <div className='my-auto'>
                    <img className="w-[300px] sm:w-[500px] mx-auto h-auto" src={profilepic}  alt='profile-pic'/>
                </div>
            </div>  

    </div>
  )
}
