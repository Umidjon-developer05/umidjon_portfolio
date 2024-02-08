import Image from 'next/image'
import React from 'react'

const Backend = ({Backend1}) => {
    console.log(Backend1);
  return (
    <div>
         <div  className='flex gap-8 flex-wrap items-center mt-10' data-aos="zoom-in">
        {
            Backend1?.tili1?.map((item,index)=>(
            <div key={index}>
                <Image src={item?.backendImage?.url}  alt='Frotend' width={100} height={100} className={`' cursor-pointer hover:animate-spin '`}/>
            </div>
            ))
        }
    </div>
    </div>
  )
}

export default Backend