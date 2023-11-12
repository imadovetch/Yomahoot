import React, { useEffect, useState } from 'react';

export default function ShowWinner() {
  const [winners, setWinners] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userid');
    const bWinners = localStorage.getItem('Spotches');

    if (!userId || !bWinners) {
      window.location.replace('./');
    }

    try {
      const parsedWinners = JSON.parse(bWinners);
      setWinners(parsedWinners);
    } catch (error) {
      console.error('Error parsing data:', error);
    }
  }, []);

  return (
    <main className='flex flex-col justify-center items-center overflow-hidden blocks h-screen w-screen'>
      <div className='text-4xl font-bold text-green-500 mb-8'>Scoreboard</div>
	<div className='custom-scrollbar h-4/5 w-2/4 py-6 rounded-lg border shadow-md  bg-app--dark'>
        {winners && Array.isArray(winners) ? (
          winners.map((player, index) => (
            <div key={index} className='w-11/12 bg-slate-300 flex mx-auto h-20 mb-2 rounded bg-app-light'>
              <div className='w-1/5 border-2 border-black h-full text-4xl font-bold flex items-center justify-center text-black '>
                {index + 1}
              </div>
              <div className='w-4/5 border-2 border-black h-full text-3xl font-bold flex items-center justify-center text-black '>
                {player}
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>

  );
}
