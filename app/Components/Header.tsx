"use client"
import  {useState} from 'react';
import {HiMenuAlt1} from 'react-icons/hi'
import {GrFormClose} from 'react-icons/gr'
import {motion,AnimatePresence} from 'framer-motion'
import ThemeSwitch from './ThemeSwitch';

 const   App =  () => {
  const [toggle, setToggle] = useState<boolean>(false)
  const handleClick = () => {
            setToggle(!toggle)
  }
  
  return (
    <div className={`shadow-md bg-white dark:bg-black dark:text-white z-20  w-full sticky top-0 `}>
      <div className="container mx-auto ">
        <header className='flex items-center justify-between px-4 py-4 md:py-6 text-slate-800 dark:text-white'>
          <h1 className="logo text-lg font-bold">Rupesh.Dev</h1>
          <nav className='flex items-center gap-4'>
            <ul className='hidden  md:flex gap-4 font-semibold '>
              <li><a href="Home">Home</a></li>
              <li><a href="About">About</a></li>
              <li><a href="Project">Project</a></li>
              <li><a href="Contact">Contact</a></li>
            </ul>
            <ThemeSwitch/>
           <div className='block md:hidden'>
             <HiMenuAlt1  className='text-4xl ' onClick={handleClick}/>
            </div>
          </nav>
        </header>
        <AnimatePresence mode='wait'>
        {
          toggle ?
           <motion.div 
           initial={{ x: "-100%" }}
           animate={{ x: "0" }}
           exit={{ x: "-100%", transition: { duration: 0.3 } }}
           transition={{ ease: 'ease-in-out', duration: 1, x: { duration: 0.3 } }}

           className='w-screen h-screen absolute  bg-white top-0 left-0'>
              <span className='absolute top-2.5 right-1 p-2'> <GrFormClose  onClick={handleClick} className=' text-5xl '/></span>
              <ul className='grid place-content-center w-full h-full gap-8 font-semibold text-xl'>
              <li><a href="Home">Home</a></li>
              <li><a href="About">About</a></li>
              <li><a href="Project">Project</a></li>
              <li><a href="Contact">Contact</a></li>


              </ul>

          </motion.div>
          : 
          null
        }
         </AnimatePresence>
      </div>
    </div>
  );
}
export default App