import React from 'react'
import Image from 'next/image'
// import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGithub, FaSass, FaLinkedin, FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa'
const Landingpage = () => {
    return (
        <div className='flex flex-col gap-[4rem] items-center justify-center  h-[auto]  md:h-[33rem] relative mt-[2rem]'>
            <div className='main-page flex  flex-col-reverse md:flex-row items-center px-[1rem] gap-[2rem]'>
                <div className='hero-page text-center md:text-left max-w-[30rem] px-[4rem] flex flex-col gap-[1rem]'>
                    <h1 className='text-base md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold'>Front-End React Developer</h1>
                    <p className='text-base md:text-lg '>I am a passionate frontend react  developer based in Kathmandu.</p>
                    <div className='flex gap-[1rem] items-center md:justify-normal justify-center'>

                        <FaGithub className='text-2xl' />
                        <FaLinkedin className='text-2xl' />
                    </div>

                </div>
                <div className="image w-[15rem] h-[15rem] md:w-[30rem] md:h-[15rem] lg:w-[20rem] lg:h-[20rem]">

                </div>
            </div>
            {/* tech stack */}
            <div className='flex flex-col md:flex-row  static items-center  md:justify-between md:gap-[4rem]'>
                <p className='border-b-2 md:border-b-0 md:border-r-2 border-solid shadow-[rgba(45,46,50,.5)] pb-[1rem] mb-[3rem] md:mb-[0]  md:pr-[1rem] md:pb[0]'>Tech Stack</p>

                <div className=' '>
                    <ul className='flex flex-wrap  gap-[1rem]'>
                        <li className='flex'>
                            <FaHtml5 color='#FF5733' className="w-[2.5rem] h-[4.5rem]" />
                            <FaCss3Alt color='#0067BE' className="w-[2.5rem] h-[4.5rem]" />
                        </li>
                        <li className='flex'>
                            <IoLogoJavascript color='#ECEA4D'  className="w-[3rem] h-[5rem]"/>
                            <SiTypescript color="#0B64CD" className="w-[2.5rem] h-[5rem]" />
                        </li>
                        <li className='flex'>
                            <FaReact color="#1187A5" className="w-[3rem] h-[5rem]"/>
                            <TbBrandNextjs color="#434353" className="w-[3rem] h-[5rem]"/>
                        
                        </li>
                        <li className='flex'>
                            <SiTailwindcss color="#00C6BD" className="w-[3rem] h-[5rem]"/>
                            <FaSass color="#E04AA0" className="w-[3rem] h-[5rem]"/>

                        </li>

                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Landingpage