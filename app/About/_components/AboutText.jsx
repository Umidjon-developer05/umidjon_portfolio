import { Button } from '@/components/ui/button'
import React from 'react'

const AboutText = () => {
  return (
    <div className='flex flex-col gap-10  lg:max-w-screen-lg '>
    <h1 className='font-serif text-xl sm:text-4xl lg:text-3xl xl:text-6xl '>
      G'afforov Umidjon
    </h1>
    <h1 className='text-base sm:text-lg sm:max-w-[720px]  lg:text-xl  font-light leading-6'>
      Hi, I'm G'afforov Umidjon, a Full stack developer with a focus on
      Next.js/React development. I love creating web applications that solve
      everyday problems, and I'm always curious to learn more when it comes
      to new technologies and creative coding.
    </h1>
    <Button className='btn w-40 text-white z-50'>Resume</Button>
  </div>
    
  )
}

export default AboutText