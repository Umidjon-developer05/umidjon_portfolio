import { Button } from '@/components/ui/button'
import React from 'react'

const AboutText = () => {
  return (
      <div className='flex flex-col  gap-10' >
        <h1 className='font-serif  sm:text-[30px]'>G'afforov Umidjon</h1>
        <h1 className='sm:max-w-[720px] sm:text-[20px] font-light leading-10'>
        Hi, I'm G'afforov Umidjon, a Full stack developer with a focus on Next.js/React development. I love creating web applications that solve everyday problems, and I'm always curious to learn more when it comes to new technologies and creative coding.
        </h1>
        <Button className='btn w-40'>Resume</Button>
      </div>
    
  )
}

export default AboutText