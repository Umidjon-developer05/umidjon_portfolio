import Image from 'next/image'
import React from 'react'

const Experience = () => {
  return (
    <div>
        <div>
        <h1 className='mt-10 sm:text-[30px] font-serif'>Experience</h1>
        <div className='flex gap-5 items-center mt-5'>
        <div style={{width:"80px",height:"80px"}}>
            <Image src='/upwork.jpg' width={1000} height={1000}  alt='Buxdu' style={{borderRadius:"50%"}}/>
        </div>
            <div >
            <h2 className='font-serif text-sm '>Upwork</h2>
            <p className='font-serif text-sm mt-1'>September 2023...</p>
            </div>
        </div>
        <div className='flex gap-5 items-center mt-5'>
        <div style={{width:"80px",height:"80px"}}>
            <Image src='/kwork.jpg' width={1000} height={1000}  alt='Buxdu' style={{borderRadius:"50%"}} />
        </div>
            <div >
            <h2 className='font-serif '>Kwork</h2>
            <p className='font-serif text-sm mt-1'>September 2023...</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Experience