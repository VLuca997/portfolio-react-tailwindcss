import React, { useState } from 'react'
import { CiMail } from "react-icons/ci";
export default function Contact() {
    const [formData, setFormData] = useState({
        id: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };
    return (
        <div id='Contact'>
            <div className="flex justify-center h-full sm:h-[70vh] items-center" >
                <div className='max-w-[1200px] mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <div className='mb-10'>

                            <div className='p-10  bg-gray-800 rounded-xl flex flex-col justify-around'>
                                <h1 className='text-4xl sm:text-5xl text-white'>
                                    contact <span>me</span>

                                </h1>
                                <p className="text-normal text-lg font-medium-text-gray-400-mt-2">
                                    Lorem, ipsum dolor. <br />Lorem, ipsum.email
                                </p>

                                <div className="flex items-center mt-2 text-gray-400">

                                    <CiMail size={30}/>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        <p>kuler master</p>
                                    </div>
                                </div>
                            </div>
                           


                        </div>
                        <div>
                                <form onSubmit={handleSubmit} className="flex flex-col space-y-4   max-w-md mx-5 rounded-md">
                                    <label className="flex flex-col">
                                        <span className="text-white">Name</span>
                                        <input
                                            type="name"
                                            name="name"
                                            id="name"
                                            placeholder='Full name'
                                            value={formData.id}
                                            onChange={handleChange}
                                            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                        />
                                    </label>

                                    <label className="flex flex-col">
                                        <span className="text-white">Email:</span>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder='Full email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                        />
                                    </label>

                                    <label className="flex flex-col">
                                        <span className="text-white">Message:</span>
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder='Full message'
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                        ></textarea>
                                    </label>

                                    <div className=' flex justify-center'>
                                        <button type="submit" className="relative w-[100%]  flex group my-3 ">
                                            <div className='absolute transition-all duration-1000 
                                                            opacity-70 -inset-px bg-gradient-to-r from-[#44bcff] via-[#ff44ec] to-[#ff675e] rounded-xl blur-lg group-hover:opacity-100 
                                                            group-hover:-inset-1 group-hover:duration-200 animate-tilt'>

                                            </div>
                                            <a className=' w-[100%] relative inline-flex items-center  justify-center px-8 py-4 text-lg font-bold text-white transition-all 
                                                duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                                                title="Download CV" role="button" href="7">
                                                Download CV
                                            </a>
                                        </button>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
