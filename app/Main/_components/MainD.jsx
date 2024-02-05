import Image from 'next/image';
import React from 'react'

const MainD = ({item}) => {
  return (
    <div className='flex  gap-4 items-center flex-wrap justify-center '>
        {
            item.map((logo,index)=>(
                <div key={index} >
                    <Image  src={logo?.dasturlashImage?.url} width={90} height={90} alt='..' className='hover:animate-pulse   cursor-pointer'/>
                </div>
            ))
        }
    </div>
  )
}

export default MainD