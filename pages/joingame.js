// JoinGame.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Link from 'next/link';
import * as components from "@/components/modules"
const socket = io('http://127.0.0.1:3000');

let gameForImportValue = null; // Declare a variable outside the component
function joinsucss(joinerserial){
  if (!localStorage.getItem('gamejoinedid') || !joinerserial) {
    window.location.replace('./joingame');
  }else{
    localStorage.setItem('joinerserialid',joinerserial)
    const data = {
      id: localStorage.getItem('gamejoinedid')+"player",// gameid + player
      questions: [
        {
          name: joinerserial,//smiya li dkhel
        }
      ]
    };
     fetch("/api/score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  }
  

}
function JoinGame() {
  
  const [games, setGames] = useState(null);
  const [codeInput, setCodeInput] = useState('');
  const [joinerserial, setjoinedone] = useState(''); // State to store user input

  useEffect(() => {
    if (!localStorage.getItem('userid')) {
      window.location.replace('./');
    }
    if(localStorage.getItem('gamejoinedid')){localStorage.removeItem('gamejoinedid')}
    
  }, []);

 

  const handleCodeSubmit = () => {
    

    const getGame = () => {
      fetch(`/api/game?id=${codeInput}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data.game);
          setGames(data.game);
          gameForImportValue = data.game; 
          console.log("gameForImportValue:fih", gameForImportValue);
          if(!gameForImportValue || (joinerserial === '')){console.log('makayench'); } else{
            
            localStorage.setItem('game', JSON.stringify(gameForImportValue));
            localStorage.setItem('gamejoinedid', codeInput);
            joinsucss(joinerserial);
            window.location.href = './preparegame';
            
          }
          
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    getGame();
  };

  return (
    //if(1 == 1){}else{}
    <main className=' overflow-hidden  blocks h-screen w-screen '>
     <components.GameHeader var={'Join a Game and Enjoy '} />
       <div className="animate-toright sl p-8  mt-56 max-w-md mx-auto border  bg-app--dark  rounded-md shadow-md">
  <div className="mb-4">
  <label className="  text-app-light  text-xl block  font-semibold text-gray-600" htmlFor="codeInput">
      Enter Your name:
    </label>
    <input
      type="text"
      id="nameInput"
      className="text-xl w-full mt-3 p-2 input"
      placeholder="Your Name"
      value={joinerserial}
      onChange={(e) => setjoinedone(e.target.value)}
    />
    <label className="text-app-light block  mt-3 text-xl font-semibold text-gray-600" htmlFor="codeInput">
      Enter Code:
    </label>
    <input
      type="text"
      id="codeInput"
      className="  text-xl w-full mt-3 p-2 input"
      placeholder="Game Code"
      value={codeInput}
      onChange={(e) => setCodeInput(e.target.value)}
    />
    
  </div>
  <button
    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
    onClick={handleCodeSubmit}
  >
    Submit Code
  </button>
</div>
    </main>
   

  );
}

export default JoinGame;
export { gameForImportValue }; 
