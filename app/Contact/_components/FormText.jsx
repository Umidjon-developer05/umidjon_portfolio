import React from 'react'

const FormText = () => {
  return (
    <div>
        <div className="flex flex-col gap-3">
          <h1  className='font-serif sm:text-[30px] text-blue-600 text-center'>Hello 👋</h1>
        <h1 className='font-serif sm:text-[25px]'> Reach out and let's bring your ideas to life! </h1>
        <h2 className='font-serif sm:text-[25px]'> I am available for freelance work.</h2>
        <h2 className='font-serif sm:text-[25px]'>+998 93 655 89 59</h2>
       <div className='flex flex-wrap items-center gap-5'>  
       <p className='border w-14 h-14 border-blue-700 cursor-pointer flex justify-center items-center' style={{borderRadius:"50%",fontSize:"20px"}}>
         <svg color='blue' cursor={'pointer'} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="Contact_emailIcon__b5vsu" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
        </p>
          <h2 className='sm:text-[20px]'>umidjongafforov175@gmail.com</h2>  
       </div>
        </div>
    </div>
  )
}

export default FormText
