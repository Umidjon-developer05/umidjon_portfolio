"use client"
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React, { useState } from 'react'

const Header = () => {
  const { data: session, status } = useSession();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  if (session?.user?.email !== process.env.NEXT_PUBLIC_EMAIL) {
  return (
    <div className=' fixed  h-[100vh] flex flex-col items-center gap-8' >
        <div className='flex justify-end  '>
        <div className='w-10 h-10 cursor-pointer border flex justify-center items-center  mt-3 ml-3' style={{ borderRadius: '50%' ,display:`${isMenuOpen ? 'none':'block'}`}} onClick={toggleMenu}>
          <a className='flex justify-center items-center h-[100%]'>
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </a>
        </div>
        </div>
          <div style={{display:`${isMenuOpen ? 'block ':'none'}`,marginTop:'-35px'}} className=' border  w-72  h-[100vh] flex flex-col items-center gap-8'>
          <div className='flex justify-end p-2'>
          <div className='w-10 h-10 cursor-pointer border flex justify-center items-center  mt-3 ml-3' style={{ borderRadius: '50%' }} onClick={toggleMenu}>
          <a className='flex justify-center items-center'>
            X
          </a>
        </div>
          </div>
          <div className=' border w-36 cursor-pointer  h-36 hover:animate-pulse   flex justify-center items-center' style={{borderRadius:"50%"}}>
        
        <Image 
         src={'/img.jpg'}
         width={1000}
         alt='assa'
         height={1000}
         style={{borderRadius:"50%",height:"100%"}}
         />
        </div>
        
        <div>
         <h1 className='font-semibold text-[22px]'>Umidjon G'afforov</h1>
        </div>
         <div className='flex gap-2'>
 
         <div className='w-14 h-14 cursor-pointer border flex  justify-center items-center' style={{borderRadius:"50%"}}>
        <a>
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        </div>
        <div className='w-14 h-14 cursor-pointer border flex  justify-center items-center' style={{borderRadius:"50%"}}>
         <a href="">
         <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
         </a>
        </div>
        <div className='w-14 h-14 cursor-pointer border flex  justify-center items-center' style={{borderRadius:"50%"}}>
       <a href="">
       <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
       </a>
        </div>
        <div className='w-14 h-14 cursor-pointer border flex  justify-center items-center' style={{borderRadius:"50%"}}>
        
        </div>
         </div>
          </div>
    </div>
  )
}
}

export default Header