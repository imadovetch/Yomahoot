// JoinGame.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Link from 'next/link';
const socket = io('http://127.0.0.1:3000');

let gameForImportValue = null; // Declare a variable outside the component
function joinsucss(){
  if (!localStorage.getItem('gamejoinedid')) {
    window.location.replace('./joingame');
  }else{
    const data = {
      id: localStorage.getItem('gamejoinedid')+"player",// gameid + player
      questions: [
        {
          name: "imad",//smiya li dkhel
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
  const [likes, setLikes] = useState(0);
  const [games, setGames] = useState(null);
  const [codeInput, setCodeInput] = useState(''); // State to store user input

  useEffect(() => {
    socket.on('likeupdate', (count) => {
      setLikes(count);
    });
  }, []);

  const handleLike = () => {
    socket.emit('liked');
  };

  const handleCodeSubmit = () => {
    

    const getGame = () => {
      fetch(`/api/game?id=${codeInput}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data.game);
          setGames(data.game);
          gameForImportValue = data.game; 
          console.log("gameForImportValue:fih", gameForImportValue);
          if(!gameForImportValue){console.log('makayench'); } else{
            
            localStorage.setItem('game', JSON.stringify(gameForImportValue));
            localStorage.setItem('gamejoinedid', codeInput);
            joinsucss();
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
    <div>
      <button onClick={handleLike} className="btn">
        aaaaaaay
      </button>
      <div id="likes">{likes}</div>

      <div>
        <label htmlFor="codeInput">Enter Code:</label>
        <input
          type="text"
          id="codeInput"
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
        />
        <button onClick={handleCodeSubmit}>Submit Code</button>
      </div>
    </div>
  );
}

export default JoinGame;
export { gameForImportValue }; 
