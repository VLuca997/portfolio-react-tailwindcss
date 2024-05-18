import React from 'react'
import {FaAmazon, FaFacebook, FaGithubSquare, FaInstagram, FaTelegram, FaTwitch} from 'react-icons/fa'
export default function Footer() {
  return (
    <div className='min-h-[150px] mt-12 w-max-[800px] border-t border-gray-500 text-center'>
        <p className='my-5 text-gray-500'>I miei contatti <br /> Seguimi sui Social!</p>
        <div className='inline-flex text-gray-500 gap-4 text-3xl'>
            <FaGithubSquare />
            <FaInstagram />
            <FaFacebook />
            <FaTwitch />
            <FaAmazon />
            <FaTelegram/>
        </div>


    </div>
  )
}
