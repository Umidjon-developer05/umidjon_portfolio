import TopicsList from '@/components/TopicsList'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='container' id='Portfolio'>
              <h1 className='text-[30px] '  data-aos="fade-right">Portfolio</h1>
    <div className='bg-blue-700 w-full h-1 rounded-2xl' data-aos="zoom-in">
      </div>
      
        <TopicsList/>
    </div>
  )
}

export default Portfolio