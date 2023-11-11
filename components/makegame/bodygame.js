import React, { useEffect, useState } from 'react';
import Format2game from './formar2game';
import Format4game from './format4game';
import insertscore from './score'
var extractins;

function refreach() {
  if (!localStorage.getItem('game') || !localStorage.getItem('gamejoinedid')) {
    window.location.replace('./joingame');
  }
  
  const games = document.querySelectorAll('.a');
  
  const playername = document.querySelector('.nameplayer');
  const gamediv = document.querySelector('.game');
  playername.style.display = "none";
  gamediv.style.display = "flex";
  let index = 0
// notes
var notesArray = [];

const notesArrayString = JSON.stringify(notesArray);
var count = 0;
localStorage.setItem('notes', notesArrayString);
var countholder = document.querySelector('.count');

const countintervalId = setInterval(()=>{
  count++;
  countholder.textContent = count;
},1000)

const intervalId = setInterval(() => {
  games[index].style.display = "none";
  
  CHECKCLICK(games[index]);
  index++;
  
    count = 0;
  if (index  === games.length ) {
    clearInterval(countintervalId);
    clearInterval(intervalId);
    localStorage.removeItem("game")
    console.log('sala')
    insertscore();
    // window.location.href = './showwinners';
  }
}, 1000);

      
     
}
function CHECKCLICK(gamesw){
  const motheranswers = gamesw.querySelector('.motheranswers');
  const answers = motheranswers.querySelectorAll('.answers');
  console.log(answers.length)
  answers.forEach((element) => {
    element.addEventListener("click", () => {
      console.log('twrekt', element.textContent);
    });
  });
  
  console.log("answers ", answers[0].textContent);
}

export default function Gamebodyprepared() {
  const [gameForImportValue, setGameForImportValue] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('game') || !localStorage.getItem('gamejoinedid')) {
      window.location.replace('./joingame');
    }
    const storedGame = localStorage.getItem('game');
    const parsedGame = storedGame ? JSON.parse(storedGame) : null;

    console.log('daz')
    
    extractins =parsedGame;
    setGameForImportValue(parsedGame);
    setLoading(false); 
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="text-xl font-black">Loading...</span>
      </div>
    );
  }

  return (
    <>
    <div className='nameplayer w-full h-full bg-blue-600'>
      
        <button onClick={refreach} className='btn-base'>hahahah</button>
    </div>
    <div className='game hidden justify-center w-full h-full items-center'>
    <div  className='count absolute  left-20  top-40  bg-app--dark p-10 text-2xl  rounded-full border '>0</div>
      <div className="gamecontainer w-3/5  h-5/6 overflow-hidden">
        {gameForImportValue ? (
          gameForImportValue.questions.map((group) => {
            if (group.format === 2) {
              return <Format2game key={group.id} dejakhtar={false} rightanswer={group.correct} id={group.id} stylr={"a"} name={group} />;
            } else {
              return <Format4game key={group.id} dejakhtar={false} rightanswer={group.correct} id={group.id} stylet={'flex'} name={group} />;
            }
            
          })
        ) : (
          <span className="text-xl font-black">No data available</span>
        )}
      </div>
    </div></>
  );
}
