"use client"
import GlobalsApi from '@/app/_utils/GlobalsApi';
import React, { useEffect, useState } from 'react'
import MainD from './_components/MainD';
import { Button } from '../../components/ui/button';



const Main = () => {
  const [banner, setBanner] = useState([]);
  const [bannerD, setBannerD] = useState([
    'Web Developer.',
    'Freelancer.',
    'Full Stack developer.',
    'MERN Stack developer'
  ]);
  const [displayedText, setDisplayedText] = useState('');
  
  let animationInterval; // Declare it here

  useEffect(() => {
    const getBannerAndAnimate = async () => {
      try {
        const resp = await GlobalsApi.getAllBanner();
        setBanner(resp?.banners);
        animateText();
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    };

    getBannerAndAnimate();

    return () => {
      // Cleanup the interval when the component unmounts
      clearInterval(animationInterval);
    };
  }, []); // Empty dependency array to run only once on mount

  const animateText = () => {
    let currentIndex = 0;

    animationInterval = setInterval(() => {
      const textIndex = currentIndex % bannerD.length;
      const text = bannerD[textIndex];

      for (let i = 0; i <= text.length; i++) {
        setTimeout(() => {
          setDisplayedText(text.substring(0, i));
        }, i * 100);
      }

      currentIndex++;
    }, bannerD.length * 1000); // Adjust the total animation duration as needed
  };

  // ... rest of your component

  return (
    <div className='w-full border h-[720px]  -z-20  ' >
      {banner.map((item, index) => (
        <div  key={index} style={{ backgroundImage: 'url(/coder.webp)', width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" ,}}  className='brightness-50'> 
          <div className=' flex items-center justify-center h-[100%]'>
          <div className='flex h-[100%] flex-col justify-center items-center ' data-aos="zoom-in-down">
            <h1 className='text-[35px] text-slate-950    opacity-100' style={{ fontWeight: "600" }}>{item?.firstName}</h1>
            <div className='flex gap-3 mt-4 mb-5  opacity-100'>
              <h1 className='text-[23px] text-slate-950   opacity-100'>I'm a </h1>
              <h1 className={`text-[23px] text-slate-950  opacity-100 `}>{displayedText}</h1>
            </div>
            <div className='mb-10  opacity-100'>
              <MainD item={item?.programing} />
            </div>
            <div> 
            </div>
              <Button className='transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white w-32' style={{transition:'2s all'}}>Contact</Button>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
