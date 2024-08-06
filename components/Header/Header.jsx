"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "./Header.css";

const Header = () => {


    return (
      <div className="fixed flex flex-col items-center gap-7 z-50 navbar overlay">
        <div className="bg-slate-950 flex flex-col items-center gap-8 overlay navbar">
          <div className="border w-36 cursor-pointer h-36 hover:animate-pulse m-auto flex justify-center items-center" style={{ borderRadius: "50%" }}>
            <Image 
              src={'/img.jpg'}
              width={1000}
              alt='assa'
              height={1000}
              style={{ borderRadius: "50%", height: "100%" }}
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
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M248 8C111 8 8 111 8 248s103 240 240 240 240-103 240-240S385 8 248 8zM119.1 388.6l12.5-81.9 178-130.8c8-5.7-1.8-10-12.4-4.2l-220.7 139-81.7-25.6c-17.8-5.6-18.1-17.9 3.7-26.5l315-121.3c14.3-6 26.5 3.3 21.6 24.3L178.2 388.6c-5.7 14.3-22 14.1-27.7 0z"></path>
                </svg>
              </a>
            </div>
          </div>
          <nav>
            <ul className="flex flex-col items-center gap-5">
              <li className="font-semibold text-[18px] cursor-pointer transition-transform duration-150 transform hover:scale-110 hover:text-green-500 hover:border-green-500 border-b-2 border-solid">
                <Link href='/about'>About</Link>
              </li>
              <li className="font-semibold text-[18px] cursor-pointer transition-transform duration-150 transform hover:scale-110 hover:text-green-500 hover:border-green-500 border-b-2 border-solid">
                <Link href='/projects'>Projects</Link>
              </li>
              <li className="font-semibold text-[18px] cursor-pointer transition-transform duration-150 transform hover:scale-110 hover:text-green-500 hover:border-green-500 border-b-2 border-solid">
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }


export default Header;
