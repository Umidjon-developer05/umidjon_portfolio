import Image from 'next/image'
import React from 'react'

const Educations = () => {
  return (
    <div>
        <h1 className='mt-10 sm:text-[30px] font-serif'>Education</h1>
        <div className='flex gap-5 items-center mt-5'>
        <div style={{width:"80px",height:"80px"}}>
            <Image src='/Buxdu.png' width={1000} height={1000}  alt='Buxdu' className='rounded-sm'/>
        </div>
            <div >
            <h2 className='font-serif text-sm '>BUKHARA STATE UNIVERSITY</h2>
            <p className='font-serif text-sm mt-1'>Software Engineering</p>
            <p className='font-serif text-sm mt-1'>September 2022 - June 2026</p>
            </div>
        </div>
        <div className='flex gap-5 items-center mt-5'>
        <div style={{width:"80px",height:"80px"}}>
            <Image src='/shift.png' width={1000} height={1000}  alt='ыршае' className='rounded-lg'/>
        </div>
            <div >
            <h2 className='font-serif '>Shift Academy</h2>
            <p className='font-serif text-sm mt-1'>Full Stack developer</p>
            <p className='font-serif text-sm mt-1'>February 2022 - February 2023</p>
            </div>
        </div>
    </div>
  )
}

export default Educations