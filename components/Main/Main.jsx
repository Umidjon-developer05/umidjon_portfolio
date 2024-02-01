import GlobalsApi from '@/app/_utils/GlobalsApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import MainD from './MainD';
import { Button } from '../ui/button';

// Assuming that item?.image?.url is a valid URL
// ... (your existing code)

// ... (your existing code)

const Main = () => {
  const [banner, setBanner] = useState([]);
  const [bannerD, setBannerD] = useState([
    'Web Developer.',
    'Freelancer.',
    'Full Stack developer.',
    'MERN Stack developer'
  ]);
  const [displayedText, setDisplayedText] = useState('');

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

  let animationInterval;

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

  return (
    <div className='w-full border h-[700px]' >
      {banner.map((item, index) => (
        <div key={index} style={{ backgroundImage: `'url(${item?.image?.url})'`, width: "100%", height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
          <div className='flex h-[100%] flex-col justify-center items-center' data-aos="zoom-in-down">
            <h1 className='text-[35px] text-slate-950 ' style={{ fontWeight: "600" }}>{item?.firstName}</h1>
            <div className='flex gap-5'>
              <h1 className='text-[35px] text-slate-950 '>I'm a </h1>
              <h1 className='text-[35px] text-slate-950'>{displayedText}</h1>
            </div>
            <div className='mb-10'>
              <MainD item={item?.programing} />
            </div>
            <div> 
              <Button className=' w-32 p-6 btn rounded-lg hover:w-36   text-white' style={{transition:'2s all'}}>Contact</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Main;
