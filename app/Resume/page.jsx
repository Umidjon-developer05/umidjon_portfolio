import React from 'react'
import Educations from './_components/Educations'
import Experience from './_components/Experience'

const Resume = () => {
  return (
    <div id='Resume' className='container sm:h-[500px] flex justify-center flex-col ' style={{ backgroundImage: 'url(/bg2.svg)', width: "100%" ,backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
          <h1 className='text-[30px] '  data-aos="fade-right">Resume</h1>
          <div className='bg-blue-700 w-full h-1 rounded-2xl' data-aos="zoom-in">
            </div>
            <div className='flex flex-wrap sm:justify-between items-center mx-5'  data-aos="fade-up">
                <Educations/>
                <Experience/>
            </div>
    </div>
  )
}

export default Resume