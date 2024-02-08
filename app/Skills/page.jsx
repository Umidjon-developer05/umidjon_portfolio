"use client"
import React, { useEffect, useState } from 'react'
import Frontend from './_components/Frontend';
import Backend from './_components/Backend';
import GlobalsApi from '../_utils/GlobalsApi';

const Skills = () => {
    const [Lang,setLang] = useState(true)
    const [Frontend1,setFrontend] = useState([])
    const [Backend1,setBackend] = useState([])
    console.log(Backend1);
    function Technologies(p) {
        if (p === "Frontend") {
            setLang(true)
        }else{
            setLang(false)
        }
    }
    const getBannerAndAnimate = async () => {
        try {
          const resp = await GlobalsApi.getAllFullStackL();
          setFrontend(resp?.frontendMs[0])
          setBackend(resp?.backends[0])
        } catch (error) {
          console.error("Error fetching banner:", error);
        }
      };
  
      useEffect(()=>{
      getBannerAndAnimate();

      },[])
  return (
    <div id='Skills' className='container sm:h-[600px] ' style={{ backgroundImage: 'url(/bg2.svg)', width: "100%" ,backgroundSize:"contain",backgroundRepeat:"no-repeat"}}>
    <h1 className='text-[30px] '  data-aos="fade-right">Skills</h1>
    <div className='bg-blue-700 w-full h-1 rounded-2xl' data-aos="zoom-in">
      </div>
      <div className='flex flex-col flex-wrap items-center'  data-aos="fade-up">
          <div className='flex justify-between w-full'>
                <button className={`' border w-[50%] transition-all  h-16 ${Lang ? 'bg-slate-700': ''} '`} onClick={()=>Technologies('Frontend')}>Frontend</button>
                <button className={`' border w-[50%] transition-all  h-16 ${!Lang ? 'bg-slate-700': ''} '`} onClick={()=>Technologies('Backend')}>Backend</button>
          </div>
          <div>
            {
                Lang ? 
                <Frontend Frontend1={Frontend1}/> 
                :
                <Backend Backend1 ={Backend1}/>
            }
          </div>
      </div>
</div>
  )
}

export default Skills