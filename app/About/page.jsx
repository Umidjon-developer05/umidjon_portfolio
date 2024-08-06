import React from 'react'
import AboutText from './_components/AboutText'
import AboutImages from './_components/AboutImages'

const About = () => {
  return (
    <div className='container sm:h-[700px] ' id='About' style={{ backgroundImage: 'url(/bg2.svg)', width: "100%" ,backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
        <div className='mt-10' >
          <h1 className='text-[30px] '  data-aos="fade-right">About Me</h1>
          <div className='bg-blue-700 w-full h-1 rounded-2xl' data-aos="zoom-in">
          </div>
          <div className='flex flex-wrap-reverse justify-between items-center    mt-5'    data-aos="fade-up"
             data-aos-duration="4000" >
              <AboutText/>
              <AboutImages/>
          </div>
        </div>
    </div>
  )
}

export default About