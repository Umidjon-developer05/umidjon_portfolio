import React from 'react'
import Educations from './_components/Educations'
import Experience from './_components/Experience'

const Resume = () => {
  return (
    <div className='container sm:h-[800px] ' style={{ backgroundImage: 'url(/bg2.svg)', width: "100%" ,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
          <h1 className='text-[30px] '  data-aos="fade-right">Resume</h1>
          <div className='bg-blue-700 w-full h-1 rounded-2xl' data-aos="zoom-in">
            </div>
            <div className='flex justify-between items-center'>
                <Educations/>
                <Experience/>
            </div>
    </div>
  )
}

export default Resume