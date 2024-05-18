import React from 'react'

import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.png'
import proj6 from '../assets/proj6.png'

export default function Work() {
  return (
    <div id='Work'>
            <div className='py-6 max-w-[1200px] mx-auto'>
                <div className='mx-auto px-4 md:px-8'>
                    <div className='mb-4 flex items-center justify-between '>
                        <div className='flex flex-col gap-4'>
                            <h2 className='text-2xl lg:text-3xl text-white'>
                                <span>
                                        my <span className=''> projects</span>
                                </span>
                            </h2>
                            <p className='text-gray-500'> Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                        </div>

                    </div>

                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8'>

                        <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg  md:h-80">
                            <img src={proj1}
                                 loading="lazy"
                                className=' absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'  />


                            <div className='pointer-events-none absolute inser-0 bg-gradient-to-r from-gray-800 via-transparent to-transparent opacity-50'>

                            </div>
                        </a>
                        <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src={proj2}
                                 loading="lazy"
                                className=' absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'  />


                            <div className='pointer-events-none absolute inser-0 bg-gradient-to-r from-gray-800 via-transparent to-transparent opacity-50'>

                            </div>
                        </a>
                        <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src={proj3}
                                 loading="lazy"
                                className=' absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'  />


                            <div className='pointer-events-none absolute inser-0 bg-gradient-to-r from-gray-800 via-transparent to-transparent opacity-50'>

                            </div>
                        </a>
                        <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg  md:h-80">
                            <img src={proj4}
                                 loading="lazy"
                                className=' absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'  />


                            <div className='pointer-events-none absolute inser-0 bg-gradient-to-r from-gray-800 via-transparent to-transparent opacity-50'>

                            </div>
                        </a>
                        <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg  md:h-80">
                            <img src={proj5}
                                 loading="lazy"
                                className=' absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'  />


                            <div className='pointer-events-none absolute inser-0 bg-gradient-to-r from-gray-800 via-transparent to-transparent opacity-50'>

                            </div>
                        </a>
                        <a href="/" className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src={proj6}
                                 loading="lazy"
                                className=' absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'  />


                            <div className='pointer-events-none absolute inser-0 bg-gradient-to-r from-gray-800 via-transparent to-transparent opacity-50'>

                            </div>
                        </a>

                    </div>

                </div>
            </div>





    </div>
  )
}
