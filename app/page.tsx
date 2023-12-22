import Image from 'next/image'
import Landingpage from './Components/Landingpage'
import './globals.css'
import Posts from './Components/Posts'


export default function Home() {
  return (
    <div className='max-w-[107rem] mx-auto px-[4rem]'>
     <Landingpage/>
     <Posts/>
    </div>
  )
}
