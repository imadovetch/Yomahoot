import { useState, useEffect } from 'react';
import * as components from "@/components/modules";


async  function beginthegame() {

		const data = {
		  id: localStorage.getItem("ownerid")+"begin",// gameid + player
		  questions: [
			{
			  bdat: "yes",
			}
		  ]
		};
		await fetch("/api/score", {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		  });
		  console.log('mcha')
	  
  }
  
const Loby = () => {
  const [players, setPlayers] = useState([]);
	if(!localStorage.getItem('ownerid')){'./Interface'}
  const fetchScoreData = () => {
    fetch(`/api/score?id=${localStorage.getItem('ownerid') + 'player'}`)
      .then((response) => response.json())
      .then((data) => {
        setPlayers(data.game);
        console.log("Success:", data.game);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const intervalId = setInterval(fetchScoreData, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="overflow-hidden h-full flex flex-col blocks animate-zoom">
      <components.Headergame />
      <div className='w-full h-full flex gap-10 flex-wrap'>
        {players.map((item) => (
          <div className='flex justify-center items-center font-serif text-3xl px-10 btn-base h-20 m-5' key={item.questions[0].name}>
            {item.questions[0].name}
          </div>
        ))}
      </div>
      <button onClick={beginthegame} className='flex w-fit ml-auto justify-center items-center font-serif text-3xl bg-slate-400 px-10 btn-base h-20 m-5'>START</button>
      <components.Footer />
    </main>
  );
};

export default Loby;
