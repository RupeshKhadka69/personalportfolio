import React from 'react'
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className=" shadow-md mb-px bg-[#2D2D32] text-white ">
            <div className="container mx-auto px-4">
                <div className='flex w-full justify-between md:flex-row flex-col  py-4'>
                    <div className="contacts flex-1  text-center md:text-left">
                        <h3 className='text-xl  inline-block mb-4 border-solid border-cyan-600 border-b-2'>Contact</h3>
                        <ul className='text-sm'>
                            <li>Email: khadkarupesh456@gmail.com</li>
                            <li>Phone: 9824088695</li>
                        </ul>
                    </div>
                    <nav className='flex-1 text-center mt-4 md:mt-0'>
                        <h3 className=' text-center text-xl inline-block mb-4 border-solid border-cyan-600 border-b-2'>Nav Links</h3>
                        <ul className='text-sm flex  flex-col  md:flex-row justify-center gap-2 '>
                            <li>Home</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>

                    </nav>

                    <div className='flex-1 text-center w-full  mt-4 md:mt-0' >
                        <h1 className='text-xl inline-block mb-4 border-solid border-cyan-600 border-b-2'>Social links</h1>
                        <div className="text-center flex justify-center gap-4">
                         <FaGithub className='text-xl text-center' />
                            <FaLinkedin className='text-xl text-center' />
                            <FaFacebook className='text-xl text-center' />
                            <FaInstagram className='text-xl text-center' />
                           
                        </div>

                    </div>

                </div>
            </div>
           <h1 className='text-center  '>Made with <span className='text-red-700 text-2xl'> &hearts;</span> by Rupesh Khadka </h1>
        </div>
    )
}

export default Footer