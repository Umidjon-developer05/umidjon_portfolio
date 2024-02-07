"use client"
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {
  const { data: session, status } = useSession();
  const { resolvedTheme} = useTheme()
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  if (session?.user?.email !== process.env.NEXT_PUBLIC_EMAIL) {
  return (
    <div className={`' fixed  h-[100vh] flex flex-col items-center gap-8 z-30   ${resolvedTheme ==='dark' && 'bg-slate-950'}  '`} >
        <div className='flex justify-end  '>
        <div className='w-10 h-10 cursor-pointer border flex justify-center items-center  mt-3 ml-3' style={{ borderRadius: '50%' ,display:`${isMenuOpen ? 'none':'block'}`}} onClick={toggleMenu}>
          <a className='flex justify-center items-center h-[100%]'>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </a>
        </div>
        </div >
          <div style={{display:`${isMenuOpen ? 'block ':'none'}`,marginTop:'-35px',transform: 'revert-layer'}} className={` ${isMenuOpen ? '':''} bg-slate-950   border  w-60  h-[100vh] flex flex-col items-center gap-8'`}>
        <div className='flex justify-end p-2'>
          <div className='w-10 h-10 cursor-pointer border flex justify-center items-center  mt-3 ml-3' style={{ borderRadius: '50%' }} onClick={toggleMenu}>
          <a className='flex justify-center items-center'>
            X
          </a>
        </div>
          </div>
          <div className=' border w-36 cursor-pointer  h-36 hover:animate-pulse m-auto   flex justify-center items-center' style={{borderRadius:"50%"}}>
        
        <Image 
         src={'/img.jpg'}
         width={1000}
         alt='assa'
         height={1000}
         style={{borderRadius:"50%",height:"100%"}}
         />
        </div>
        
        <div>
         <h1 className='font-semibold text-[22px] text-center mt-2'>Umidjon G'afforov</h1>
        </div>
         <div className='flex gap-2 p-2 justify-center'>
 
         <div className='w-12 h-12 cursor-pointer  flex  justify-center items-center' style={{borderRadius:"50%"}}>
        <a>
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        </div>
        <div className='w-12 h-12 cursor-pointer  flex  justify-center items-center' style={{borderRadius:"50%"}}>
         <a href="">
         <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
         </a>
        </div>
        <div className='w-12 h-12 cursor-pointer  flex  justify-center items-center' style={{borderRadius:"50%"}}>
       <a href="">
       <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
       </a>
        </div>
        <div className='w-12 h-12 cursor-pointer   flex  justify-center items-center' style={{borderRadius:"50%"}}>
          <a href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
              <path d="M16 .5C7.437.5.5 7.438.5 16S7.438 31.5 16 31.5c8.563 0 15.5-6.938 15.5-15.5S24.562.5 16 .5zm7.613 10.619l-2.544 11.988c-.188.85-.694 1.056-1.4.656l-3.875-2.856-1.869 1.8c-.206.206-.381.381-.781.381l.275-3.944 7.181-6.488c.313-.275-.069-.431-.482-.156l-8.875 5.587-3.825-1.194c-.831-.262-.85-.831.175-1.231l14.944-5.763c.694-.25 1.3.169 1.075 1.219z"/>
            </svg>
          </a>
        </div>
         </div>
         <div className='flex  flex-col  ml-12 gap-8 mt-6'>
            <Link href={'/'} onClick={closeMenu} className='text-[20px] text-left flex items-center gap-3' style={{fontWeight:"600"}}>
              <div>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="Sidebar_icon__czDJe" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>  
              </div>  
              <div>
              Home
              </div>
            </Link>
            <Link href={'/About'} onClick={closeMenu} className='text-[20px] text-left flex items-center gap-3' style={{fontWeight:"600"}}>
              <div>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="Sidebar_icon__czDJe" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <div>
              About
              </div>
            </Link>
            <Link href={'/'} onClick={closeMenu} className='text-[20px] text-left flex items-center gap-3' style={{fontWeight:"600"}}>
              
              <div>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="Sidebar_icon__czDJe" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path><path d="M14.5 5.5l4 4"></path><path d="M12 8l-5 -5l-4 4l5 5"></path><path d="M7 8l-1.5 1.5"></path><path d="M16 12l5 5l-4 4l-5 -5"></path><path d="M16 17l-1.5 1.5"></path></svg>
              </div>
              <div>
              Skills
              </div>
            </Link>
            <Link href={'/Portfolio'} onClick={closeMenu} className='text-[20px] text-left flex items-center gap-3' style={{fontWeight:"600"}}>
              <div>
              <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" class="Sidebar_icon__czDJe" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M14 11H10V13H14V11Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z" fill="currentColor"></path></svg>
              </div>
              <div>
                Portfolio
              </div>
            </Link>
            <Link href={'/'} onClick={closeMenu} className='text-[20px] text-left flex items-center gap-3' style={{fontWeight:"600"}}>
              <div>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="Sidebar_icon__czDJe" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <div>
                Contact
              </div>
            </Link>
         </div>
            
        </div>  
    </div>
  )
}
}

export default Header