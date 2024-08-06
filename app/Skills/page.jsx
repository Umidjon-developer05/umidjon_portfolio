"use client"
import React, { useEffect, useState } from 'react'
import Frontend from './_components/Frontend';
import Backend from './_components/Backend';
import GlobalsApi from '../_utils/GlobalsApi';

const Skills = () => {
    const [Lang,setLang] = useState(true)
    function Technologies(p) {
        if (p === "Frontend") {
            setLang(true)
        }else{
            setLang(false)
        }
    }
  
  return (
    <div id='Skills' className='container mx-5   sm:h-[600px] ' style={{ backgroundImage: 'url(/bg2.svg)', width: "100%" ,backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
    <h1 className='text-[30px] '  data-aos="fade-right">Skills</h1>
    <div className='bg-blue-700 w-full h-1 rounded-2xl' data-aos="zoom-in">
      </div>
      <div className='flex flex-col flex-wrap items-center w-full '  data-aos="fade-up">
          <div className='flex justify-between w-full z-50'>
                <button className={`' border w-[50%] transition-all  h-16 ${Lang ? 'bg-slate-500 border-b-red-600  border-spacing-5 ': ''} '`} onClick={()=>Technologies('Frontend')}>Frontend</button>
                <button className={`' border w-[50%] transition-all  h-16 ${!Lang ? 'bg-slate-500 border-b-red-600 border-spacing-5 ': ''} '`} onClick={()=>Technologies('Backend')}>Backend</button>
          </div>
          <div>
            {
                Lang ? 
                <Frontend /> 
                :
                <Backend />
            }
          </div>
      </div>
</div>
  )
}

export default Skills