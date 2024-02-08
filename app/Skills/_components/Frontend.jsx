import Image from 'next/image';
import React from 'react'

const Frontend = ({Frontend1}) => {
    console.log(Frontend1?.tili);
  return (
    <div className='flex gap-8 flex-wrap items-center mt-10'>
        {
            Frontend1?.tili?.map((item,index)=>(
            <div key={index}>
                <Image src={item?.frontendImage?.url}  alt='Frotend' width={150} height={150} className={`' cursor-pointer  hover:animate-spin '`}/>
            </div>
            ))
        }
    </div>
  )
}

export default Frontend