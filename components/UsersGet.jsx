import React, { useEffect, useState } from 'react'

const UsersGet = () => {
    const [topics, setTopics] = useState([]);
    useEffect(() => {
        const UserData = async () => {
          try {
            const res = await fetch("http://localhost:3000/api/topics", {
              cache: "no-store",
            });
    
            if (!res.ok) {
              throw new Error("Failed to fetch topics");
            }
    
            const topicsData = await res.json();
            setTopics(topicsData);
          } catch (error) {
            console.log("Error loading topics: ", error);
          }
        };
    
        UserData();
      }, []); // Empty dependency array ensures the effect runs only once on mount
  return (
    <div style={{width:"100%"}}>
        {
          topics.topics?.map((t)=>
            <div

            key={t._id}
            className="p-4  border border-slate-300 my-3 flex justify-between gap-5 m-3 items-center "
            style={{ borderRadius: "20px" }}
          >
            <div>
              <h2 className="font-bold text-2xl">{t.title}</h2>
              <div>{t.description}</div>
            </div>

            <div className=" flex gap-2 align-items-center">
                <div></div>
            <button className='btn ' style={{padding:"10px", borderRadius:"20px",color:"#fff",backgroundColor:"green"}}>Ish😄</button>
            <button className='btn ' style={{padding:"10px",borderRadius:"20px",color:"#fff",backgroundColor:"red"}}>Ish😔</button>
            </div>
          </div>
            )
        }
    </div>
  )
}

export default UsersGet