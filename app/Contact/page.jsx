import React from 'react'
import Form from './_components/Form'
import FormText from './_components/FormText'

const Contact = () => {
  return (
    <div className='container h-[700px] mx-5' id='Contact'>
        <h1 className='text-[30px] '  data-aos="fade-right">Contact</h1>
    <div className='bg-blue-700 w-full h-1 rounded-2xl' data-aos="zoom-in">
      </div>
      <div className='flex sm:justify-center gap-20 flex-wrap items-center h-[100%]'>
      <FormText/>
        <Form/>
      </div>
    </div>
  )
}

export default Contact