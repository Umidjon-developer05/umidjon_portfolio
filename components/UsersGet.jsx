import React, { useEffect, useState } from 'react';

const UsersGet = () => {
  const [topics, setTopics] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);
  const [clickedButtonIds, setClickedButtonIds] = useState(() => {
    // Retrieve previously clicked button IDs from local storage on component mount
    const storedClickedIds = localStorage.getItem('clickedButtonIds');
    return storedClickedIds ? JSON.parse(storedClickedIds) : [];
  });

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
    if (buttonClicked || clickedButtonIds.includes(id)) {
      // Button already clicked or request already sent, do nothing
      return;
    }

    setButtonClicked(true);

    const selectedTopic = topics.topics.find((t) => t._id === id);
    if (!selectedTopic) {
      console.error("Selected topic not found");
      return;
    }

    setTitle(selectedTopic.title);
    setDesc('ish bajarildi😁');
    setClickedButtonIds((prevIds) => [...prevIds, id]);

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
        // Update local storage with the new clickedButtonIds
        localStorage.setItem('clickedButtonIds', JSON.stringify(clickedButtonIds));
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setButtonClicked(false);
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
            backgroundColor: clickedButtonIds.includes(t._id) && desc === 'ish bajarildi😁' ? 'green' : 'initial',
          }}
        >
          <div>
            <h2 className="font-bold text-2xl" style={{ color: clickedButtonIds.includes(t._id) && desc === 'ish bajarildi😁' ? '#fff' : '#222' }}>{t.title}</h2>
            <div style={{ color: clickedButtonIds.includes(t._id) && desc === 'ish bajarildi😁' ? '#fff' : '#222' }}>{t.description}</div>
          </div>

          <div className="flex gap-2 align-items-center">
            <div></div>
            <button
              className='btn'
              onClick={() => Work(t._id)}
              style={{ padding: "10px", borderRadius: "20px", color: "#fff", backgroundColor: clickedButtonIds.includes(t._id) && desc === 'ish bajarildi😁' ? 'red' : "green" }}
              disabled={buttonClicked}
            >
              Ish😄
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersGet;
