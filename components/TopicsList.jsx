"use client";
import { useState, useEffect } from "react";
import UsersGet from "./UsersGet";
import GlobalsApi from "@/app/_utils/GlobalsApi";



const TopicsList = () => {
  const [Portfolio,setPortfolio]= useState([])
  async function  GetALLN()  {
    const resp =  await GlobalsApi.getAllPortfolio();
     setPortfolio(resp?.portfolios)
  }
  useEffect(()=>{
    GetALLN()
  },[])
  
  
    return(
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}} >
              <UsersGet  Portfolio={Portfolio}   />
      </div>
    )
};

export default TopicsList;
