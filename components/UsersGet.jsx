import React, { useEffect, useState } from 'react';

const UsersGet = () => {
  const [topics, setTopics] = useState([]);
  const [title, setTitle] = useState('');
  const [clickedButtonId, setClickedButtonId] = useState(null);

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

  const Work = async (id) => {
    setTitle('ish bajarildi😄');
    setClickedButtonId(id);
    try {
      const res = await fetch("https://todo-list-beta-lovat-20.vercel.app/api/button", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, id }),
      });

      if (res.ok) {
        // Optionally, you can update the state or perform any other actions on success
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const WorkNo = async (id) => {
    setTitle('ish bajarilmadi😔');
    setClickedButtonId(id);
    try {
      const res = await fetch("https://todo-list-beta-lovat-20.vercel.app/api/button", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, id }),
      });

      if (res.ok) {
        // Optionally, you can update the state or perform any other actions on success
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      {topics.topics?.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 m-3 items-center"
          style={{
            borderRadius: "20px",
            backgroundColor:
              clickedButtonId === t._id
                ? title === 'ish bajarildi😄'
                  ? 'green'
                  : title === 'ish bajarilmadi😔'
                  ? 'red'
                  : 'initial'
                : 'initial',
          }}
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2 align-items-center">
            <div></div>
            <button
              className='btn'
              onClick={() => Work(t._id)}
              style={{ padding: "10px", borderRadius: "20px", color: "#fff", backgroundColor: "green" }}
            >
              Ish😄
            </button>
            <button
              className='btn'
              onClick={() => WorkNo(t._id)}
              style={{ padding: "10px", borderRadius: "20px", color: "#fff", backgroundColor: "red" }}
            >
              Ish😔
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersGet;
