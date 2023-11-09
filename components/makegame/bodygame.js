import React, { useEffect } from 'react'; // Import useEffect from 'react'
import Format2game from './formar2game';
import Format4game from './format4game';

const groupData = [
  { id: 1, type: 'no', name: 'Group 1' },
//   { id: 2, type: 'yes', name: 'Group 2' },
//   { id: 3, type: 'no', name: 'Group 3' },
  // ... more groups
];

export default function Gamebodyprepared() {
  useEffect(() => {
    const games = document.querySelectorAll('.a');
	console.log(games.length)
    if (games[0]) {
    //   games[0].style.display = "none";
    }
  }, []);

  return (
    <div className='flex justify-center w-full h-full items-center'>
      <div className="gamecontainer w-3/5  h-5/6 ">
        {groupData.map((group) => {
          if (group.type === 'yes') {
            return <Format2game  key={group.id} id={group.id} name={group.name} />;
          }
          else{
			return <Format4game  key={group.id} id={group.id} name={group.name} />;
		  }
        })}
      </div>
    </div>
  );
}
