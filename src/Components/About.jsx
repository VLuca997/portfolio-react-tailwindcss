import React from 'react'
import aboutImg from '../assets/about4.jpeg'
export default function About() {
  return (
    <div className='my-[50px] text-white bg-[#232325] h-auto' id='About'>
        
            <div className='py-[40px] flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 max-w-6xl mx-auto'>

                    <div className=''>
                        <div className='max-w-[500px] h-full'>
                            <img src={aboutImg} 
                                alt="" 
                                className='object-cover bg-gray-700 rounded-xl max-h-[300px] filter grayscale brightness-50 '    
                            />
                        </div>
                    </div>
                    <div className='p-2'>
                        <div className='text-gray-300 my-3'>
                            <h3 className='text-4xl font-semibold mb-5'>
                                Qualcosa su di  <span className='primary-text'>Me</span>
                                
                            </h3>
                            <p className='text-justify leading-7 w-11/12 mx-auto'>
                                Sviluppo principalmente con MERN ( Mongodb Express React e Node.js), Laravel11 + php e Ruby on Rails.
                            </p>
                        </div>
                        
                        <div className='flex mt-10 justify-center w-[100%] gap-7'>
                           <div className='bg-[#333331]/90 border border-transparent hover:border-slate-600 hover:bg-[#323031]/50 transition duration-300 p-5 rounded-3xl shadow-lg shadow-gray-600 hover:shadow-gray-400'>
                           <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                                 
                            5 <span className='primary-text'> + </span>{" "}
                            </h3>
                            <p>
                                <span className='md:text-base text-xs'>
                                    Projects
                                </span>
                            </p>
                           </div>
                        </div>
                    </div>













            </div>





    </div>
  )
}
