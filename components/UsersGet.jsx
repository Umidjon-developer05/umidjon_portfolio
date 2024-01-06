  import React, { useEffect, useState } from 'react';

  const UsersGet = () => {
    const [topics, setTopics] = useState([]);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [clickedButtonId, setClickedButtonId] = useState(null);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [clickedButtonIds, setClickedButtonIds] = useState(
      JSON.parse(localStorage.getItem('clickedButtonIds')) || []
    );

    useEffect(() => {
      const UserData = async () => {
        try {
          const res = await fetch("https://todo-list-beta-lovat-20.vercel.app/api/topics", {
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
    }, []);

    // ... (rest of your code remains unchanged)

    const Work = async (id) => {
      if (buttonClicked || clickedButtonIds.includes(id)) {
        // Button already clicked or request already sent, do nothing
        return;
      }

      setButtonClicked(true);

      const selectedTopic = topics.topics?.find((t) => t._id === id);
      if (!selectedTopic) {
        console.error("Selected topic not found");
        return;
      }

      setClickedButtonIds((prevIds) => [...prevIds, id]);
      setTitle(selectedTopic.title);
      setDesc('ish bajarildi😁');
      setClickedButtonId(id);

      try {
        const res = await fetch("https://todo-list-beta-lovat-20.vercel.app/api/button", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            id,
            title: selectedTopic.title,
            desc,
            description: selectedTopic.description,
          }),
        });

        if (res.ok) {
          // Optionally, you can update the state or perform any other actions on success
        } else {
          throw new Error("Failed to create a topic");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setButtonClicked(false);
      }
    };



    const [countdown, setCountdown] = useState(0);
    const convertTimeToSeconds = (hours, minutes, seconds) => {
      return hours * 3600 + minutes * 60 + seconds;
    };

    useEffect(() => {
      let totalSeconds = 0;
      topics.topics?.forEach((t) => {
        const seconds = convertTimeToSeconds(t.time1, t.time2, t.time3);
        totalSeconds += seconds;
      });
    
      setCountdown(totalSeconds);
    
      const interval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    
      return () => clearInterval(interval);
    }, [topics]);
    
  

    // Format seconds to display as HH:MM:SS
    const formatTime = (seconds) => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;

      return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    };
    
    useEffect(() => {
      localStorage.setItem('clickedButtonIds', JSON.stringify(clickedButtonIds));
    }, [clickedButtonIds]);

    return (
      <div style={{ width: "100%",display:"flex" ,justifyContent:"center", margin:"0 auto" , flexWrap:"wrap"}}>
        {topics.topics?.map((t) => (
          <div
            key={t._id}
            className="card p-4 border border-slate-300 my-3  justify-between gap-5 m-3 items-center"
            style={{
              borderRadius: "20px",
              width:"400px",
              height:"300px"
            }}
          >
            <div style={{display:"flex",flexDirection:"column",overflow: "auto",height:"50px"}} >
              <h2 className="font-bold text-2xl" style={{color: clickedButtonId === t._id && desc === 'ish bajarildi😁' ?'#222':'#222'}}>{t.title}</h2>
              <div style={{color: clickedButtonId === t._id && desc === 'ish bajarildi😁' ?'#222':'#222'}}>{t.description}</div>
            </div>
           
            <div className="flex gap-2 justify-between " style={{marginTop:"170px",alignItems:"center"}}>
              <div style={{color: clickedButtonId === t._id && desc === 'ish bajarildi😁' ?'#222':'#222'}}>{t.time}</div>
             <div>
             <button
                className='btn'
                onClick={() => Work(t._id)}
                style={{
                  width:"100px",
                  height:"50px",
                  borderRadius: "20px",
                  color: "#fff",
                  backgroundColor: clickedButtonIds.includes(t._id) ? 'gray' : 
                    (clickedButtonId === t._id && desc === 'ish bajarildi😁' ? 'red' : 'green'),
                }}
                disabled={buttonClicked || clickedButtonIds.includes(t._id)}
              >
                Ish😄
              </button>
             </div>
            </div>
          </div>
        ))}
      </div>
    );
  };



  export default UsersGet;
