"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";
import { useSession } from "next-auth/react";
import UsersGet from "./UsersGet";
import GlobalsApi from "@/app/_utils/GlobalsApi";



const TopicsList = () => {
  const { data: session, status } = useSession();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Portfolio,setPortfolio]= useState([])
  const fetchTopicsData = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }

      const topicsData = await res.json();
      setTopics(topicsData);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      console.log("Error loading topics: ", error);
      setLoading(false); // Set loading to false in case of an error
    }
  };
  useEffect(() => {

    fetchTopicsData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  async function  GetALLN()  {
    const resp =  await GlobalsApi.getAllPortfolio();
     setPortfolio(resp?.portfolios)
  }
  useEffect(()=>{
    GetALLN()
  },[])
  
  if (session?.user?.email === process.env.NEXT_PUBLIC_EMAIL) {
    return (
      <>
      <div style={{ overflowY:"auto",height:"500px"}}
      
      >{
          topics.topics?.map((t) => (
            <div
              key={t._id}
              className="p-4 border border-slate-300  my-3 flex justify-between gap-5 m-3 items-start"
              style={{ borderRadius: "20px"}}
             
              data-aos="zoom-out-down"
            >
              <div>
                <h2 className="font-bold text-2xl">{t.title}</h2>
              </div>
  
              <div className="flex gap-2 align-items-center">
                <RemoveBtn id={t._id} />
                <Link href={`/editTopic/${t._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </div>
            </div>
          ))
      }
      
      </div>
   
      </>
    );
  }else{
    return(
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}} >
              <UsersGet  Portfolio={Portfolio}   />
      </div>
    )
  }
};

export default TopicsList;
