"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "./Header.css";
const Header = () => {


    return (
      <div className="fixed flex flex-col  gap-7 z-50 h-screen hidden sm:block sm:w-[350px] bg-gray-950 ">
        <div className=" flex flex-col   ">
          <div className="border mt-5 w-44 cursor-pointer h-44 hover:animate-pulse m-auto flex justify-center items-center" style={{ borderRadius: "50%" }}>
            <Image 
              src={'/umidjon.jpg'}
              width={1000}
              alt='assa'
              style={{ borderRadius: "50%", height: "100%",backgroundSize:"cover" }}
            />
          </div>
          <h1 className='font-semibold text-[22px] text-center mt-2'>Umidjon G'afforov</h1>
          <div className='flex gap-2 p-2 justify-center'>
            <div className='w-12 h-12 cursor-pointer flex justify-center items-center' style={{ borderRadius: "50%" }}>
              <a href='' onClick={() => window.open('https://github.com/Umidjon-developer05', '_blank')} className='bg-slate-700 w-10 h-10 transition-transform duration-100 transform hover:scale-150 hover:bg-blue-600 hover:w-11 hover:h-11 flex justify-center items-center' style={{ borderRadius: "50%" }}>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
            <div className='w-12 h-12 cursor-pointer flex justify-center items-center' style={{ borderRadius: "50%" }}>
              <a href="" onClick={() => window.open('https://www.instagram.com/umidjon_developer/', '_blank')} className='bg-slate-700 w-10 h-10 transition-transform duration-100 transform hover:scale-150 hover:bg-blue-600 hover:w-11 hover:h-11 flex justify-center items-center' style={{ borderRadius: "50%" }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </a>
            </div>
            <div className='w-12 h-12 cursor-pointer flex justify-center items-center' style={{ borderRadius: "50%" }}>
              <a href="" onClick={() => window.open('https://www.facebook.com/profile.php?id=100055266687728', '_blank')} className='bg-slate-700 w-10 h-10 transition-transform duration-100 transform hover:scale-150 hover:bg-blue-600 hover:w-11 hover:h-11 flex justify-center items-center' style={{ borderRadius: "50%" }}>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
            </div>
            <div className='w-12 h-12 cursor-pointer flex justify-center items-center' style={{ borderRadius: "50%" }}>
              <a href="" onClick={() => window.open('https://t.me/Umidjon01_developer', '_blank')} className='bg-slate-700 w-10 h-10 transition-transform duration-100 transform hover:scale-150 hover:bg-blue-600 hover:w-11 hover:h-11 flex justify-center items-center' style={{ borderRadius: "50%" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
              </svg>
              </a>
            </div>
          </div>
          <nav className="p-10">
            <ul className="flex flex-col gap-5">
              <li className="font-semibold flex gap-2 text-[18px] cursor-pointer transition-transform duration-150 transform hover:scale-110 hover:text-green-500 hover:border-green-500 border-b-2 border-solid">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>     
                <Link href='#'>Home</Link>
              </li>
              <li className="font-semibold flex gap-2 text-[18px] cursor-pointer transition-transform duration-150 transform hover:scale-110 hover:text-green-500 hover:border-green-500 border-b-2 border-solid">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>    
                <Link href='#About'>About</Link>
              </li>
              <li className="font-semibold flex gap-2 text-[18px] cursor-pointer transition-transform duration-150 transform hover:scale-110 hover:text-green-500 hover:border-green-500 border-b-2 border-solid">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-kanban"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M8 10v4"/><path d="M12 10v2"/><path d="M16 10v6"/></svg>
                <Link href='#Portfolio'>Projects</Link>
              </li>
          
              <li className="font-semibold flex gap-2  text-[18px] cursor-pointer transition-transform duration-150 transform hover:scale-110 hover:text-green-500 hover:border-green-500 border-b-2 border-solid">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-university"><circle cx="12" cy="10" r="1"/><path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"/><path d="M6 17v.01"/><path d="M6 13v.01"/><path d="M18 17v.01"/><path d="M18 13v.01"/><path d="M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"/></svg>
              
                <Link href='#Resume'>Resume</Link>
              </li>
              <li className="font-semibold flex gap-2 text-[18px] cursor-pointer transition-transform duration-150 transform hover:scale-110 hover:text-green-500 hover:border-green-500 border-b-2 border-solid">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
                <Link href='#Skills'>Skills</Link>
              </li>
              <li className="font-semibold flex gap-2 text-[18px] cursor-pointer transition-transform duration-150 transform hover:scale-110 hover:text-green-500 hover:border-green-500 border-b-2 border-solid">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-contact"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"/><rect width="18" height="18" x="3" y="4" rx="2"/><circle cx="12" cy="10" r="2"/><line x1="8" x2="8" y1="2" y2="4"/><line x1="16" x2="16" y1="2" y2="4"/></svg>
               
                <Link href='#Contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }


export default Header;
