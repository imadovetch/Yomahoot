import { useState, useEffect } from 'react';
import * as components from "@/components/modules";


async  function beginthegame() {

		const data = {
		  id: localStorage.getItem("connectedgamecode")+"begin",// gameid + player
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
  function showtable() {
    const table = document.querySelector('.codetable');
    if (table.style.display === 'none') {
        table.style.display = 'flex';
    } else {
        table.style.display = 'none';
    }
}

const Loby = () => {
  const [players, setPlayers] = useState([]);
	const [code, bringCode] = useState('null');
  const fetchScoreData = () => {
    fetch(`/api/score?id=${localStorage.getItem("connectedgamecode") + 'player'}`)
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
    if(!localStorage.getItem('ownerid')){'./index'}
    if(!localStorage.getItem('connectedgamecode')){'./Interface'}
    var ocode = localStorage.getItem('connectedgamecode')
    bringCode(ocode)
    const intervalId = setInterval(fetchScoreData, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="overflow-hidden h-full flex flex-col blocks animate-zoom">
      <components.Headergame />
      <div  onClick={showtable}  className='absolute top-4  btn-base left-16'>code</div>
      <div className='codetable absolute w-72 rounded-2xl flex justify-center items-center font-serif  h-40 left-1/2 -translate-x-1/2 top-20 bg-app-light text-5xl text-black'>{code}</div>
      <div className='w-full h-full flex gap-10 flex-wrap'>
        {players.map((item) => (
          <div className='flex justify-center items-center font-serif text-3xl px-10 btn-base h-20 m-5' >
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
